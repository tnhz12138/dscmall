<!--  -->
<template>
  <div class="categrop-right" id="wrapper">
    <div class="swiper-wrapper">
      <div class="img-item">
        <img :src="this.$store.state.imgHeader" alt="" />
      </div>
      <div class="item" v-for="(item, index) in listDatas" :key="index">
        <div class="tit">
          <a href="">{{ item.cat_name }}</a>
        </div>
        <ul>
          <li v-for="list in item.child" :key="list.cat_id">
            <router-link :to="'/categroplist/' + list.cat_id">
              <img :src="list.touch_icon" alt="" />
              <span>{{ list.cat_name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll";
export default {
  props: {
    listDatas: Array,
    index: Number,
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      scroll,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollPage() {
      this.scroll = new BScroll("#wrapper", {
        pullUpLoad: true,
        scrollbar: false,
        pullDownRefresh: true,
        click: true,
        // and so on
      });
      this.scroll.on("scroll", (obj) => {
        console.log(obj);
        console.log(document.querySelector("#wrapper").scrollHeight);
        console.log(document.querySelector("#wrapper").offsetHeight);
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
  updated() {
    this.scrollPage();
  }, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.categrop-right {
  width: calc(100% - 8.5rem);
  position: absolute;
  top: 5rem;
  right: 0;
  bottom: 0;
  margin-bottom: 5rem;
  background: #fff;
  overflow-y: hidden;
  .swiper-wrapper {
    width: 100%;
    .img-item {
      width: 100%;
      height: 9.6rem;
      overflow: hidden;
      margin-top: 1.1rem;
      border-radius: 0.2rem;
      padding: 0 1.1rem;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item {
      box-sizing: border-box;
      padding: 0 1.1rem;
      margin-bottom: -1.1rem;
      .tit {
        margin: 1.1rem 0;
        height: 2.5rem;
        font-size: 1.3rem;
        text-align: center;
      }
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        li {
          width: 33.33%;
          text-align: center;
          box-sizing: border-box;
          margin-bottom: 2rem;
          a {
            display: block;
            img {
              display: block;
              width: 5.2rem;
              height: 5.2rem;
              margin: 0 auto;
            }
            span {
              display: block;
              height: 2rem;
              line-height: 2rem;
              overflow: hidden;
              text-align: center;
              font-size: 1.2rem;
              color: #777;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
