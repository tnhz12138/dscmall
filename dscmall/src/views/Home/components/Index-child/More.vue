<!--  -->
<template>
  <div>
    <div class="home-more">
      <ul class="tabs">
        <li
          v-for="list in lilist"
          :key="list.id"
          :data-index="list.id"
          @click="tabLi"
        >
          <i>{{ list.i }}</i>
          <span :class="{ active: activeIndex == list.id }">{{
            list.span
          }}</span>
        </li>
      </ul>
    </div>
    <div class="more-list"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      activeIndex: 0,
      lilist: [
        {
          id: "0",
          i: "精选",
          span: "为你推荐",
          type: "is_best",
          url: "/goods/type_list",
        },
        {
          id: "1",
          i: "社区",
          span: "新奇好物",
          type: "",
          url: "/discover/find_list",
        },
        {
          id: "2",
          i: "新品",
          span: "潮流上新",
          type: "is_new",
          url: "/goods/type_list",
        },
        {
          id: "3",
          i: "热卖",
          span: "火热爆款",
          type: "is_hot",
          url: "/goods/type_list",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    tabLi(el) {
      let index = el.currentTarget.getAttribute("data-index");
      let url = this.lilist[index].url;
      let type = this.lilist[index].type;
      this.activeIndex = index;
      this.$emit("patenttabLi", {
        index: index || 0,
        url: url || "/goods/type_list",
        type: type || "is_best",
      });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.home-more {
  margin: 1rem 1rem 0;
  .tabs {
    display: flex;
    padding: 1rem 0;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        font-style: normal;
        font-size: 1.6rem;
        color: #333;
        font-weight: 700;
      }
      span {
        font-size: 1.2rem;
        color: #888;
        border-radius: 1rem;
        padding: 0.1rem 0.8rem;
        margin-top: 0.2rem;
        text-align: center;
      }
      .active {
        color: #fff;
        background: red;
        border-radius: 10px;
      }
    }
  }
}
</style>
