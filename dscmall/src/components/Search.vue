<!--  -->
<template>
  <div class="search">
    <form action="">
      <div class="search-group">
        <div style="width:1.6rem;height:3rem;line-height:3rem" @click="goback">
          <i
            class="iconfont icon-jiantou3"
            style="font-size:1.6rem;color:#999"
          ></i>
        </div>
        <div class="input-group">
          <input type="text" @click="goSearch" v-model="getModel" />
          <i class="iconfont icon-sousuo2" @click="fsData"></i>
        </div>
        <i
          class="iconfont icon-leimupinleifenleileibie"
          style="height:3rem;line-height:3rem"
          v-if="showFont"
          @click="toggle"
        ></i>
      </div>
    </form>
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
      toggleStyle: true,
      getModel: "",
    };
  },
  props: ["showFont"],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goback() {
      window.history.back(-1);
    },
    goSearch() {
      this.$router.push("/search");
    },
    toggle() {
      this.toggleStyle = !this.toggleStyle;
      this.$emit("partoggleStyle", this.toggleStyle);
    },
    fsData() {
      this.$router.push("/searchlist?keywords=" + this.getModel);
      this.$store.commit("searchKeywords", this.getModel);
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
.search {
  padding: 0.8rem 0;
  background-color: #fff;
  // position: fixed;
  // top: 0;
  // left: 0;
  z-index: 20;
  height: 5rem;
  width: 100%;
  box-sizing: border-box;
  .search-group {
    padding: 0 1rem;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    display: flex;
    .input-group {
      margin: 0 1rem;
      border: 1px solid #ddd;
      border-radius: 1.5rem;
      width: 100%;
      overflow: hidden;
      display: flex;
      input {
        height: 3rem;
        padding: 0 0 0 1.2rem;
        width: 100%;
        border: none;
        outline: none;
      }
      i {
        font-size: 1.6rem;
        height: 3rem;
        line-height: 3rem;
        padding-right: 1rem;
        color: #666;
      }
    }
  }
}
</style>
