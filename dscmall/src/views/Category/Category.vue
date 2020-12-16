<!--  -->
<template>
  <div class="">
    <Search :showFont="showFont" />
    <div class="category">
      <CategropLeft @changeData="getData" />
      <CategropRight :listDatas="listDatas" :index="index" />
    </div>
    <Loading v-if="showFlag" />
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue";
import Search from "@/components/Search";
import CategropLeft from "./components/Categrop-left";
import CategropRight from "./components/Categrop-right";
import { getHomeList } from "@/api/api";
import Loading from "@/components/Loading";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Search,
    CategropLeft,
    CategropRight,
    Loading,
  },
  data() {
    //这里存放数据
    return {
      url: "/catalog/list/858",
      index: 0,
      listDatas: [],
      showFlag: true,
      showFont: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getData(data) {
      this.index = data.index;
      this.url = data.url;
      this.listDatas = [];
      this.getDataList(this.url);
      this.showFlag = true;
    },
    async getDataList(url) {
      let result = await getHomeList(url);
      if (result.data) {
        this.showFlag = false;
        this.listDatas = result.data;
      } else if (result.data == "undefined") {
        alert("网络出现故障");
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let url = this.url;
    let index = this.index;
    this.getData({
      url,
      index,
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
html,
body {
  background-color: #fff;
}
.category {
  margin-top: 5rem;
  overflow: hidden;
}
</style>
