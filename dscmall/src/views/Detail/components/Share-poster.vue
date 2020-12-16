<!--  -->
<template>
  <div class="share-poster" v-show="showsharePoster">
    <div class="poster-content">
      <div class="close-poster" @click="posterFn">
        <img src="@/assets/images/poster-close.png" alt="" />
      </div>
      <div class="poster-img">
        <img :src="posterDatas.img" alt="" />
      </div>
      <div class="poster-goods-info">
        <div class="goods-title">{{ posterDatas.title }}</div>
        <div class="goods-price">
          <span>{{ Math.floor(posterDatas.price) }}</span
          >.00
          <i>{{ posterDatas.dprice }}</i>
        </div>
      </div>
      <div class="poster-canvas">
        <canvas></canvas>
      </div>
      <div class="poster-text">长按保存到相册</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    showsharePoster: Boolean,
    posterDatas: Object,
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    showsharePoster() {
      if (this.showsharePoster == true) {
        this.savePoster();
      }
    },
  },
  //方法集合
  methods: {
    posterFn() {
      this.$emit("gbShowsharePoster", false);
    },
    savePoster() {
      console.log("出来吧，海报");
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
.share-poster {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 111;
  background: rgba(0, 0, 0, 0.5);
  .poster-content {
    width: 80%;
    margin-left: 10%;
    background: #fff;
    height: 70%;
    margin-top: 15%;
    position: relative;
    .close-poster {
      position: absolute;
      right: 2rem;
      top: -3rem;
      img {
        height: 3rem;
      }
    }
    .poster-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .poster-goods-info {
      width: calc(100% - 4rem);
      min-height: 2rem;
      padding: 0 2rem;
      .goods-title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 2rem;
      }
      .goods-price {
        margin-top: 0.5rem;
        color: red;
        span {
          font-size: 1.4rem;
        }
        i {
          font-style: normal;
          color: #ccc;
          text-decoration: line-through;
        }
      }
    }
    .poster-canvas {
      max-height: 9.8rem;
      width: 9.8rem;

      canvas {
        width: 100%;
        height: 100%;
      }
    }
    .poster-text {
      position: absolute;
      bottom: -4.4rem;
      height: 4.4rem;
      color: #fff;
      line-height: 4.4rem;
      width: 100%;
      text-align: center;
      font-size: 1.4rem;
    }
  }
}
</style>
