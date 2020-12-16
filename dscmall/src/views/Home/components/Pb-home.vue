<!-- 公共头部 -->
<template>
  <div class="pb-home">
    <div class="pb-header">
      <div
        class="header-item"
        v-for="list in pbDatas.category"
        :key="list.cat_id"
      >
        <img :src="list.touch_icon" alt="" />
        <span>{{ list.cat_name }}</span>
      </div>
    </div>
    <div class="pb-brand">
      <div class="brand-header">
        <h2>品牌精选</h2>
      </div>
      <div class="brand-content">
        <ul>
          <li v-for="list in pbDatas.brand" :key="list.brand_id">
            <img :src="list.brand_logo" alt="" />
            <span>{{ list.brand_name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="pb-product-list"
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="10"
    >
      <ul>
        <li v-for="list in pbListsDatas" :key="list.goods_id">
          <img :src="list.goods_thumb" alt="" />
          <div class="product-content">
            <p>
              {{ list.goods_name }}
            </p>
            <span>￥{{ list.shop_price }}</span>
            <div class="goshop">进店</div>
            <div class="product-list-fot">
              <span>{{ list.sale }}人已购买</span>
              <i class="iconfont icon-gouwuche"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pb-more" v-if="moreShow">
      <span>没有更多了...</span>
    </div>
    <Loading v-if="pbFlag" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Loading from "@/components/Loading";

export default {
  props: ["cat_id"],
  //import引入的组件需要注入到对象中才能使用
  components: {
    Loading,
  },
  data() {
    //这里存放数据
    return {
      url: "/visual/visual_second_category",
      params: {
        cat_id: this.cat_id,
      },
      urlPost: "/catalog/goodslist",
      paramsPost: {
        cat_id: 4,
        warehouse_id: 0,
        area_id: 0,
        size: 10,
        page: 0,
        sort: "goods_id",
        order: "desc",
        self: 0,
      },
      type: "post",
    };
  },
  methods: {
    getDatas() {
      let obj = {
        url: this.url,
        params: this.params,
      };
      this.$store.dispatch("actChangePbdata", obj);
    },
    getPostDatas() {
      this.paramsPost.cat_id = this.cat_id;
      let objPost = {
        url: this.urlPost,
        params: this.paramsPost,
        type: this.type,
      };
      this.$store.dispatch("actChangePbListsDatas", objPost);
    },
    loadMore() {
      this.$nextTick(() => {
        if (!this.moreShow) {
          this.paramsPost.page++;
          this.getPostDatas();
        }
      });
    },
  },
  //监听属性 类似于data概念
  computed: {
    pbDatas() {
      return this.$store.state.pbDatas;
    },
    pbFlag() {
      return this.$store.state.pbFlag;
    },
    pbListsDatas() {
      return this.$store.state.pbListsDatas;
    },
    moreShow() {
      return this.$store.state.moreShow;
    },
  },
  //监控data中的数据变化
  watch: {},
  mounted() {
    this.getDatas();
  },
  destroyed() {
    this.$store.state.pbListsDatas = [];
    this.$store.state.moreShow = false;
  }, //生命周期 - 销毁完成
};
</script>
<style lang="less">
html,
body {
  background-color: #f4f4f4;
  padding-bottom: 2.5rem;
}
.pb-home {
  margin: 1rem 0;
  .pb-header {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    border-radius: 1rem;
    padding: 1rem;
    margin: 0 1rem 1rem;
    .header-item {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      img {
        width: 80%;
        height: auto;
      }
      span {
        margin-top: 1rem;
      }
    }
  }
  .pb-brand {
    background-color: #fff;
    border-radius: 1rem;
    margin: 0 1rem;
    .brand-header {
      height: 4.4rem;
      line-height: 4.4rem;
      padding: 0 2rem;
      h2 {
        font-weight: 400;
      }
    }
    .brand-content {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          img {
            width: 80%;
          }
          span {
            margin-top: 1rem;
          }
        }
      }
    }
  }
  .pb-product-list {
    padding: 1rem 1rem 0;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 48%;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-top: 1rem;
        img {
          width: 100%;
          min-height: 17rem;
        }
        .product-content {
          background-color: #fff;
          width: 100%;
          box-sizing: border-box;
          padding: 0.8rem;
          border-radius: 0 0 0.5rem 0.5rem;
          p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 1.4rem;
            line-height: 2rem;
            min-height: 4rem;
          }
          span {
            display: block;
            color: red;
            font-size: 1.4rem;
            font-weight: 700;
            margin: 0.5rem 0;
          }
          .goshop {
            width: 3.6rem;
            height: 1.8rem;
            text-align: center;
            line-height: 1.8rem;
            background-color: #f92028;
            color: #fff;
            margin: 0.5rem 0;
          }
        }
        .product-list-fot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            color: #999;
            font-size: 1.2rem;
            font-weight: 400;
          }
          i {
            font-size: 1.4rem;
            color: #f92028;
          }
        }
      }
    }
  }
  .pb-more {
    width: 100%;
    height: 6rem;
    font-size: 1.4rem;
    text-align: center;
    line-height: 6rem;
  }
}
</style>
