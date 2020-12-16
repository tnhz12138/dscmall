<!--  -->
<template>
  <div class="list-data">
    <ul v-if="ulIndex == '1'">
      <li v-for="(list, index) in listdatas" :key="index">
        <router-link :to="'/categroplist/' + list.goods_id">
          <img :src="list.img" alt style="height:63.46vw" />
          <div class="list-title">
            <p>{{ list.goods_name }}</p>
            <div class="ulOne">
              <div class="ul-img">
                <img :src="list.user_picture" alt="" />
                <span>{{ list.user_name }}</span>
              </div>
              <div class="ul-right">
                <i class="iconfont icon-xianshi"></i>
                <span>{{ list.dis_browse_num }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(list, index) in listdatas" :key="index">
        <router-link :to="'/detail/' + list.goods_id">
          <img :src="list.goods_thumb" alt />
          <div class="list-title">
            <p>{{ list.title }}</p>
            <div class="ulTwo">
              ￥<span>{{ Math.floor(list.market_price) }}</span
              >.00
            </div>
          </div>
        </router-link>
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
    listdatas: Array,
    ulIndex: String,
  },
  data() {
    //这里存放数据
    return {
      flag: true,
    };
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
.list-data {
  margin: 0 1rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 48%;
      background-color: #fff;
      border-radius: 1rem;
      margin-bottom: 2.5%;
      overflow: hidden;
      img {
        width: 100%;
      }
      .list-title {
        padding: 1.3rem 1rem 1.6rem;
        height: 10rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          width: 100%;
          word-break: break-all;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 1.5rem;
          -webkit-line-clamp: 2;
          color: #333;
          font-weight: 500;
        }
        .ulOne {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .ul-img {
            display: flex;
            img {
              width: 2.2rem;
              height: 2.2rem;
              border-radius: 50%;
              margin-right: 0.5rem;
              display: block;
            }
            span {
              display: block;
              height: 2.2rem;
              line-height: 2.2rem;
            }
          }
        }
        .ulTwo {
          margin-top: 0.8rem;
          color: rgb(242, 14, 40);
          font-size: 12.6px;
          span {
            font-size: 1.8rem;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
