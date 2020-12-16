<!--  -->
<template>
  <div class="index-list3" :style="pat.bgc">
    <div class="ls-img">
      <img :src="pat.src" alt="" />
    </div>
    <div class="adv-goods-list">
      <ul>
        <li v-for="(list, index) in pat.listChild" :key="index">
          <img :src="list.imgsrc" alt="" />
          <div>
            <p>{{ list.title }}</p>
            <i
              >￥<span>{{ list.price }}</span
              >00</i
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: ["pat"],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.index-list3 {
  margin: 1rem 1rem 0;
  border-radius: 1rem;
  padding: 0 0 2rem;
  position: relative;
  .ls-img {
    width: 100%;
    img {
      width: 100%;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  }
  .adv-goods-list {
    margin-top: -20%;
    width: 93%;
    margin-left: 3.5%;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      li {
        width: 32%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0.5rem;
        img {
          width: 100%;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        div {
          padding: 1rem 0.8rem;
          background-color: #fff;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          p {
            font-size: 1.3rem;
            color: #000;
            min-height: 3.4rem;
            line-height: 1.7rem;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
          i {
            color: rgb(242, 14, 40);
            font-size: 10.5px;
            font-style: normal;
            span {
              font-size: 15px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
