import Vue from "vue";
import VueRouter from "vue-router";

// 使用
Vue.use(VueRouter)
//解决刷新报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 创建组件
import Home from "../views/Home/Home.vue";



import Category from "../views/Category/Category.vue";
import Cart from "../views/Cart/Cart.vue";
import Find from "../views/Find/Find.vue";
import Mine from "../views/Mine/Mine.vue";


// 配置路由
let routes = [{
    path: "/home",
    component: Home,
    children: [{
        path: "index",
        component: () => import('../views/Home/children/Index.vue')
    }, {
        path: "household",
        component: () => import('../views/Home/children/Household.vue')
    }, {
        path: "clothing",
        component: () => import('../views/Home/children/Clothing.vue')
    }, {
        path: "shoebag",
        component: () => import('../views/Home/children/ShoeBag.vue')
    }, {
        path: "mobilephones",
        component: () => import('../views/Home/children/MobilePhones.vue')
    }, {
        path: "computer",
        component: () => import('../views/Home/children/Computer.vue')
    }, {
        path: "hometextiles",
        component: () => import('../views/Home/children/HomeTextiles.vue')
    }, {
        path: "personalMakeup",
        component: () => import('../views/Home/children/PersonalMakeup.vue')
    }, {
        path: "/home",
        redirect: "/home/index"
    }]
}, {
    path: "/category",
    component: Category
},
{
    path: "/cart",
    component: Cart
},
{
    path: "/find",
    component: Find
},
{
    path: "/mine",
    component: Mine
},
{
    path: "/search",
    component: () => import("../views/Search/Search.vue")
},
{
    path: "/categroplist/:cId",
    component: () => import("../views/Category/components/Categrop-list.vue")
},
{
    path: "/detail/:gId",
    component: () => import("../views/Detail/Detail.vue")
},
{
    path: "/searchlist",
    component: () => import("../views/Search/SearchList.vue")
},
{
    path: "/login",
    component: () => import("../views/Login/Login.vue")
},
{
    path: "/register",
    component: () => import("../views/Login/Register.vue")
},
{
    path: "/",
    redirect: "/login"
}]

let router = new VueRouter({
    routes
})

// 注册一个全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.path == "/mine" || to.path == "/login") {
        next()
        return;
    }
    const token = JSON.stringify(window.localStorage.getItem("token"))
    console.log(token);
    if (!token) return next("/login")
    next()
})

// 暴露
export default router