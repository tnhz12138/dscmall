<!--  -->
<template>
  <div class="categrop-left">
    <ul>
      <li
        v-for="(list, index) in lists"
        :key="index"
        :class="{ active: listIndex == index }"
        @click="tabList(index)"
      >
        <p>{{ list.cat_name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    listss: Array,
  },
  data() {
    //这里存放数据
    return {
      listIndex: 0,
      url: "/catalog/list/858",
    };
  },
  //监听属性 类似于data概念
  computed: {
    lists() {
      return this.$store.state.lists;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    tabList(lsindex) {
      this.listIndex = lsindex;
      this.$store.state.imgHeader = this.$store.state.lists[
        this.listIndex
      ].touch_catads;
      this.url =
        "/catalog/list/" + this.$store.state.lists[this.listIndex].cat_id;
      this.$emit("changeData", {
        index: this.listIndex,
        url: this.url,
      });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("actchangeCategroy");
    // console.log(this.$store.state.lists);
    // this.lists = this.$store.state.lists;
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.categrop-left {
  position: absolute;
  top: 5rem;
  left: 0;
  bottom: 0;
  margin-bottom: 5rem;
  background-color: #fff;
  width: 8.5rem;
  box-sizing: border-box;
  border-right: 0.05rem solid #f5f5f5;
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 3.8rem;
      text-align: center;
      font-size: 1.3rem;
      color: #999;
      overflow: hidden;
      p {
        height: 2rem;
        line-height: 2rem;
        margin: 0.9rem 0 0 0;
      }
    }
    .active {
      p {
        border-left: 0.25rem solid #f23030;
        color: #f23030;
      }
    }
  }
}
</style>
