<!--  -->
<template>
  <div class="index-news">
    <img
      src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978466633.png"
      alt=""
    />
    <div>
      <ul ref="news" :class="{ trans: flag }">
        <li v-for="(item, index) in newsData" :key="index">
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>
    <i class="iconfont icon-04"></i>
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
      newsData: [
        { id: 1, title: "服务店突破2000多家" },
        { id: 2, title: "我们成为中国最大家电零售B2B2C系统" },
        { id: 3, title: "三大国际腕表品牌签约" },
      ],
      flag: false,
      timer: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollNewsFn() {
      let oUl = this.$refs.news; //获取ul  dom元素
      oUl.style.top = "-5rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.newsData.push(this.newsData[0]);
        this.newsData.shift();
        oUl.style.top = "0rem";
        this.flag = !this.flag;
      }, 500);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.scrollNewsFn, 5000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timer);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
// @import "../../../../node_modules/swiper/dist/css/swiper.css";
</style>
<style lang="less">
.index-news {
  height: 5rem;
  margin: 0 1rem;
  border-radius: 0 0 1rem 1rem;
  position: relative;
  padding: 0.7rem 1rem;
  background-color: #fff;
  border-top: 1px solid #efefef;
  box-sizing: border-box;
  display: flex;
  //   justify-content: center;
  align-items: center;
  img {
    height: 86%;
    margin-right: 0.8rem;
    display: block;
  }
  div {
    height: 100%;
    width: 70%;
    overflow: hidden;
    position: relative;
    ul {
      width: 100%;
      position: absolute;

      li {
        line-height: 3.6rem;
        height: 3.6rem;
        span {
          font-size: 1.4rem;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
          width: 80%;
        }
      }
    }
    .trans {
      transition: all 0.5s linear;
    }
  }
  i {
    width: 2rem;
    height: 2rem;
    color: red;
  }
}
</style>
