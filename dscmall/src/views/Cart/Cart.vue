<!--  -->
<template>
  <div class="cart-page" v-infinite-scroll="loadMore">
    <div class="cart-header" v-if="!cartDatas.length">
      <div class="cart-img">
        <img src="@/assets/images/cart-empty.png" alt="" />
      </div>
      <p>您的购物车还是空空的，快去逛逛吧</p>
      <div class="cart-button">
        <button><router-link to="/home">去逛逛</router-link></button>
        <button>看看关注</button>
      </div>
    </div>

    <div class="cart-list" v-else>
      <ul>
        <li
          v-for="(cart, index) in cartDatas"
          :key="index"
          @click="goDetail(cart.goods_id)"
        >
          <div class="select" @click="changeSelectStatus(cart, index)">
            <i class="iconfont icon-danxuankuang" v-if="!cart.isSelect"></i>
            <i
              class="iconfont icon-danxuankuangxuanzhong"
              v-else
              style="color:#f00"
            ></i>
          </div>
          <div class="cart-content">
            <div class="cart-img">
              <img :src="cart.goods_thumb" alt="" />
            </div>
            <div class="cart-text">
              <div class="cart-title">
                {{ cart.goods_name }}
              </div>
              <div class="cart-text-wrap">
                <div class="price">{{ Math.floor(cart.market_price) }}</div>
                <div class="num-wrap">
                  <div class="num">
                    <a href="javascript:;" @click.stop="minusCart(index)">-</a>
                    <input type="text" v-model.number="cart.value" />
                    <a href="javascript:;" @click.stop="addCart(index)">+</a>
                  </div>
                  <i class="iconfont icon-shoucang1"></i>
                  <i
                    class="iconfont icon-shanchu1"
                    @click.stop="delCart(index)"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <h5>
      <span>猜你喜欢</span>
      <div class="line"></div>
    </h5>

    <div class="product-list">
      <ul>
        <li v-for="list in goodsGuess" :key="list.goods_id">
          <img :src="list.goods_thumb" alt="" />
          <div class="product-content">
            <p>
              {{ list.goods_name }}
            </p>
            <span>￥{{ list.shop_price }}</span>
            <span>{{ list.sale }}人已购买</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-more" v-if="goodsShow">
      <span>没有更多了...</span>
    </div>

    <div class="cart-footer">
      <div class="selectAll" @click="changeSelectAllStatus">
        <i class="iconfont icon-danxuankuang" v-if="!selectAll"></i>
        <i
          class="iconfont icon-danxuankuangxuanzhong"
          v-else
          style="color:#f00"
        ></i>
        <span>全选</span>
      </div>
      <div class="totalPrice">
        <div class="footer-price">
          合计：<span>{{ totalPrice }}</span>
        </div>
        <div class="tips">(不含运费,已节省 10)</div>
      </div>
      <div class="goBuy">去结算({{ sumCart }})</div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      url: "/goods/goodsguess",
      params: {
        page: 0,
        size: 10,
      },
      type: "post",
    };
  },
  //监听属性 类似于data概念
  computed: {
    cartDatas() {
      return this.$store.state.cartDatas;
    },
    selectAll() {
      return this.$store.state.selectAll;
    },
    totalPrice() {
      let totalPrice = 0;
      this.cartDatas.forEach((item) => {
        if (item.isSelect) {
          totalPrice += item.value * item.market_price;
        }
      });
      return totalPrice;
    },
    sumCart() {
      let sumCart = 0;
      this.cartDatas.forEach((item) => {
        if (item.isSelect) {
          sumCart += item.value;
        }
      });
      return sumCart;
    },
    goodsGuess() {
      return this.$store.state.goodsGuess;
    },
    goodsShow() {
      return this.$store.state.goodsShow;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeSelectStatus(cart, index) {
      console.log(cart.isSelect);
      cart.isSelect = !cart.isSelect;
      this.$store.commit("changeSelectStatus", { cart, index });
    },
    changeSelectAllStatus() {
      this.$store.commit("changeSelectAllStatus");
    },
    addCart(index) {
      this.$store.commit("addCart", index);
    },
    minusCart(index) {
      this.$store.commit("minusCart", index);
    },
    delCart(index) {
      this.$store.commit("delCart", index);
    },
    goDetail(gid) {
      this.$router.push("/detail/" + gid);
    },

    loadMore() {
      console.log(111);
      this.params.page++;
      this.getGoodsGuessDatas();
    },

    getGoodsGuessDatas() {
      let obj = {
        url: this.url,
        params: this.params,
        type: this.type,
      };
      this.$store.dispatch("actChangeGoodsGuess", obj);
    },
  },

  mounted() {},
};
</script>
<style lang="less">
html,
body {
  background-color: #f4f4f4;
  padding-bottom: 2.5rem;
}
.cart-page {
  padding-bottom: 5rem;
  overflow-x: hidden;
  .cart-header {
    margin: 1.1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    text-align: center;
    padding-bottom: 4rem;
    .cart-img {
      width: 10rem;
      height: 10rem;
      margin: 4rem auto 0;
      img {
        width: 100%;
      }
    }
    p {
      width: 100%;
      text-align: center;
      margin-top: 1rem;
      font-size: 1.4rem;
    }
    .cart-button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;
      margin-top: 1rem;
      button {
        padding: 0.8rem 1.2rem;
        color: #333;
        background-color: #fff;
        border: 1px solid #eee;
        &:last-child {
          margin-left: 1rem;
        }
      }
    }
  }
  .cart-list {
    width: 100%;
    max-height: 40rem;
    overflow: auto;
    ul {
      li {
        padding: 1rem;
        height: 10rem;
        border-bottom: 1px solid #efefef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        background-color: #fff;
        border-radius: 1.5rem;
        .select {
          width: 10%;
          text-align: center;
        }
        .cart-content {
          width: 88%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .cart-img {
            width: 7rem;
            height: 7rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .cart-text {
            width: calc(100% - 8rem);
            margin-right: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .cart-title {
              padding: 0.5rem 0.5rem 0rem;
              margin-bottom: 0.5rem;
              font-size: 1.4rem;
              line-height: 1.6rem;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .cart-text-wrap {
              width: 100%;
              display: flex;
              justify-content: space-between;
              .price {
                font-size: 1.6rem;
                color: #f44;
                font-weight: 400;
                &::before {
                  content: "￥";
                  font-size: 1.2rem;
                }
                &::after {
                  content: ".00";
                  font-size: 1.2rem;
                }
              }
              .num-wrap {
                display: flex;
                i {
                  height: 2rem;
                  line-height: 2rem;
                }
                .icon-shoucang1 {
                  margin: 0 1rem;
                }
                .num {
                  display: flex;
                  margin-right: 1rem;
                  input {
                    width: 3rem;
                    height: 2rem;
                    border: 1px solid #efefef;
                    text-align: center;
                    box-sizing: border-box;
                  }
                  a {
                    display: block;
                    width: 2rem;
                    height: 2rem;
                    background-color: #efefef;
                    text-align: center;
                    line-height: 2rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  h5 {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    position: relative;
    color: #888;
    span {
      display: block;
      height: 4rem;
      width: 7.6rem;
      background: #f3f3f3;
      font-size: 1.6rem;
      font-weight: 400;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -3.8rem;
      z-index: 10;
    }
    .line {
      width: 20rem;
      height: 0.1rem;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #000;
      transform: translateX(-50%);
    }
  }

  .product-list {
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
          em {
            display: block;
            width: 100%;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
            font-style: normal;
            font-weight: 400;
            font-size: 1.6rem;
            color: red;
            &::before {
              content: "￥";
              font-size: 1.2rem;
            }
            &::after {
              content: ".00";
              font-size: 1.2rem;
            }
          }
          span {
            display: block;
            color: #999;
            font-size: 1.2rem;
            font-weight: 400;
          }
        }
      }
    }
  }

  .cart-more {
    width: 100%;
    height: 6rem;
    font-size: 1.4rem;
    text-align: center;
    line-height: 6rem;
  }

  .cart-footer {
    width: 100%;
    height: 4.4rem;
    position: fixed;
    bottom: 5rem;
    left: 0;
    background: #fff;
    border-top: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    .selectAll {
      width: 20%;
      text-align: center;
    }
    .totalPrice {
      width: 55%;
      text-align: right;
      .footer-price {
        span::before {
          content: ￥;
          font-size: 1.4rem;
        }
        span {
          font-size: 1.8rem;
          color: #f44;
          font-weight: bold;
        }
      }
      .tips {
        font-size: 1.2rem;
        color: #999;
      }
    }
    .goBuy {
      width: 24%;
      margin-left: 2%;
      height: 100%;
      line-height: 4.4rem;
      background: #f44;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
