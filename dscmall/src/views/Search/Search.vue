<!--  -->
<template>
  <div class="search-page">
    <Search />
    <div class="search-content">
      <div class="search-wrap">
        <div class="search-wrap-title">
          <div class="title">最近搜索</div>
          <i class="iconfont icon-shanchu1" @click="shanchuData"></i>
        </div>
        <ul class="search-list">
          <li v-for="(list, index) in searchKeywords" :key="index">
            <router-link :to="'/searchlist?keywords=' + list">{{
              list
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Search from "@/components/Search";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Search,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    searchKeywords() {
      return this.$store.state.searchKeywords;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    shanchuData() {
      this.$store.commit("shanchuData");
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
.search-page {
  .search-content {
    margin: 0 0 5rem 0;
    .search-wrap {
      .search-wrap-title {
        width: calc(100% - 2rem);
        height: 4.4rem;
        padding: 0 1rem;
        margin: 1rem 0 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
        background-color: #fff;
      }
      .search-list {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 1rem 0;
        li {
          width: 20%;
          border: 1px solid #efefef;
          height: 3rem;
          text-align: center;
          line-height: 3rem;
          margin: 1% 2.5%;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
