<!--  -->
<template>
  <div class="categrop-list" v-infinite-scroll="loadMore">
    <Search :showFont="showFont" @partoggleStyle="ptoggleStyle" />
    <div class="list-nav">
      <ul>
        <li
          v-for="(list, index) in categropName"
          :key="index"
          :class="{ activeLi: categropIndex == index }"
          @click="tabLi(index)"
        >
          <span>{{ list }}</span>
          <div
            class="icon"
            v-if="index == 0 || index == categropName.length - 1"
          >
            <i class="iconfont icon-jiantou-copy-copy" v-if="true"></i>
            <i class="iconfont icon-jiantou" v-else></i>
          </div>
        </li>
        <li @click="showSx = !showSx">
          <i class=""></i>
          筛选
        </li>
      </ul>
    </div>
    <div class="list-content">
      <div :class="toggleStyle ? 'list-warp1' : 'list-warp2'">
        <ul>
          <li
            v-for="categroyList in categroyLists"
            :key="categroyList.goods_id"
          >
            <router-link :to="'/detail/' + categroyList.goods_id">
              <img :src="categroyList.goods_img" alt=""/>
              <div class="item">
                <h4>{{ categroyList.goods_name }}</h4>
                <p>
                  ￥<span>{{
                    categroyList.shop_price_formated.slice(1, 4)
                  }}</span
                  >.00
                </p>
                <div class="item-fot">
                  <em>进店</em>
                  <span>{{ categroyList.sales_volume }}人已购买</span>
                  <i class="iconfont icon-gouwuche"></i>
                </div></div
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
    <transition name="sx">
      <div class="mask" v-if="showSx">
        <div class="mask-title">
          <h2>自营产品</h2>
        </div>
        <div class="attrs">
          <div>仅看有货</div>
          <div>促销</div>
        </div>
        <div class="mask-price">
          <div class="price-header">
            价格区间
          </div>
          <div class="price-content">
            <input type="text" placeholder="最低价" v-model="params.min" />
            <input type="text" placeholder="最高价" v-model="params.max" />
          </div>
        </div>
        <div class="brand">
          <h4>品牌</h4>
          <i class="iconfont icon-jiantou2"></i>
        </div>
        <div class="mask-fot">
          <div @click="showSx = false">关闭</div>
          <div style="background-color: #e93b3d;color:#fff" @click="okFn">
            确定
          </div>
        </div>
      </div>
    </transition>
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
    return {
      showFont: true,
      toggleStyle: true,
      categropName: ["综合", "新品", "销量", "价格"],
      categropIndex: 0,
      url: "/catalog/goodslist",
      params: {
        cat_id: 1130,
        min: "",
        max: "",
        goods_num: 0,
        size: 10,
        page: 1,
        sort: "goods_id",
        order: "desc",
        self: 0,
        keywords: "",
      },
      type: "post",
      obj: {},
      flagZonghe: 0,
      flagPrice: 0,
      showSx: false,
    };
  },
  //监听属性 类似于data概念
  //监控data中的数据变化
  watch: {},
  computed: {
    categroyLists() {
      return this.$store.state.categroyLists;
    },
  },
  //方法集合
  methods: {
    ptoggleStyle(data) {
      this.toggleStyle = data;
    },
    tabLi(index) {
      this.params.sort = "goods_id";
      this.params.order = "desc";
      this.params.min = "";
      this.params.max = "";
      this.categropIndex = index;
      if (index == 0) {
        this.flagZonghe++;
        if (this.flagZonghe % 2) {
          this.params.order = "asc";
        } else {
          this.params.order = "desc";
        }
        this.params.sort = "goods_id";
      } else if (index == 1) {
        this.flagZonghe = 0;
        this.flagPrice = 0;
        this.params.sort = "last_update";
      } else if (index == 2) {
        this.flagZonghe = 0;
        this.flagPrice = 0;
        this.params.sort = "sales_volume";
      } else if (index == 3) {
        this.flagPrice++;
        if (this.flagPrice % 2) {
          this.params.order = "asc";
        } else {
          this.params.order = "desc";
        }
        this.params.sort = "shop_price";
      }
      this.$store.dispatch("actChangeCategroyList", this.obj);
    },
    okFn() {
      this.showSx = false;
      this.$store.dispatch("actChangeCategroyList", this.obj);
    },
    loadMore() {
      this.page++;
      this.$store.dispatch("actChangeCategroyList", this.obj);
    },
    // https://x.dscmall.cn/api/catalog/goodslist
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.params.cat_id = this.$route.params.cId;
    this.params.keywords = this.$route.query.keywords;
    this.obj = {
      url: this.url,
      params: this.params,
      type: this.type,
    };
    this.$store.dispatch("actChangeCategroyList", this.obj);
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
  background-color: #f4f4f4;
}
.categrop-list {
  width: 100%;
  .list-nav {
    width: 100%;
    height: 3.5rem;
    border-top: 1px solid #efefef;
    background-color: #fff;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 1.3rem;
        }
      }
      .activeLi {
        color: #f92028;
      }
    }
  }
  .list-content {
    padding: 0 0.6rem;
    .list-warp1 {
      ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        li {
          margin-top: 1rem;
          width: 49%;
          img {
            width: 100%;
          }
          .item {
            padding: 0.8rem;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            h4 {
              height: 3.8rem;
              line-height: 1.9rem;
              font-weight: 400;
              font-size: 1.4rem;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            p {
              padding: 0.6rem 0 0.8rem;
              text-align: left;
              font-weight: 600;
              color: rgb(242, 14, 40);
              span {
                font-size: 1.6rem;
                font-weight: 700;
              }
            }
            .item-fot {
              display: flex;
              justify-content: space-between;
              align-items: center;
              em {
                font-style: normal;
                padding: 0.1rem 0.5rem;
                font-size: 1.3rem;
                background-color: #fef0f0;
                color: #fe2028;
              }
              span {
                display: block;
                width: 55%;
                color: #999;
              }
              i {
                color: #f92028;
              }
            }
          }
        }
      }
    }
    .list-warp2 {
      ul {
        width: 100%;
        li {
          margin-top: 1rem;
          width: 100%;
          background-color: #fff;
          border-radius: 0.8rem;
          a {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
              width: 9rem;
              height: 9rem;
              line-height: 9rem;
              vertical-align: middle;
            }
            .item {
              padding: 0.8rem;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              h4 {
                height: 3.8rem;
                line-height: 1.9rem;
                font-weight: 400;
                font-size: 1.4rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              p {
                padding: 0.6rem 0 0.8rem;
                text-align: left;
                font-weight: 600;
                color: rgb(242, 14, 40);
                span {
                  font-size: 1.6rem;
                  font-weight: 700;
                }
              }
              .item-fot {
                display: flex;
                justify-content: space-between;
                align-items: center;
                em {
                  font-style: normal;
                  padding: 0.1rem 0.5rem;
                  font-size: 1.3rem;
                  background-color: #fef0f0;
                  color: #fe2028;
                }
                span {
                  display: block;
                  width: 55%;
                  color: #999;
                }
                i {
                  color: #f92028;
                }
              }
            }
          }
        }
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f6f6f9;
    .mask-title {
      height: 4.4rem;
      line-height: 4.4rem;
      padding: 0 1rem;
      background-color: #fff;
      h2 {
        font-weight: normal;
        font-size: 1.6rem;
        color: #333;
      }
    }
    .attrs {
      width: 100%;
      height: 4.4rem;
      margin-top: 1.5rem;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      div {
        height: 3rem;
        width: 25%;
        line-height: 3rem;
        text-align: center;
        background-color: #f7f7f7;
        margin-left: 1rem;
      }
    }
    .mask-price {
      width: 100%;
      height: 11rem;
      margin-top: 1.5rem;
      background-color: #fff;
      .price-header {
        width: calc(100% - 2rem);
        height: 2rem;
        line-height: 2rem;
        padding: 1rem;
        font-size: 1.6rem;
        color: #333;
      }
      .price-content {
        width: calc(100% - 2rem);
        height: 4.9rem;
        padding: 1rem;
        border-top: 1px solid #efefef;
        display: flex;
        justify-content: space-around;
        align-items: center;
        input {
          text-align: center;
          border-radius: 3px;
          font-size: 14px;
          color: #333;
          background-color: #f7f7f7;
          width: 40%;
          height: 4rem;
        }
      }
    }
    .brand {
      padding: 1.3rem 1.5rem;
      width: calc(100% - 3rem);
      height: 2.4rem;
      background-color: #fff;
      margin-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.6rem;
      h4 {
        font-weight: 400;
        color: #333;
      }
    }
    .mask-fot {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4.9rem;
      background-color: #fff;
      div {
        display: inline-block;
        width: 50%;
        height: 100%;
        text-align: center;
        line-height: 4.9rem;
        color: #333;
        font-size: 1.6rem;
      }
    }
  }
}

.sx-enter,
.sx-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.sx-enter-active,
.sx-leave-active {
  transition: all 0.5s linear;
}
</style>
