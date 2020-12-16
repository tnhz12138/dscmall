<!--  -->
<template>
  <div class="detail-page">
    <div
      class="detail-header"
      id="title0"
      :style="' background: rgba(255, 255, 255,' + bgOpacityHeader + ')'"
      ref="header"
    >
      <i
        class="iconfont icon-jiantou3"
        :style="
          'background: rgba(41, 47, 54, ' + bgOpacityI + ');color: ' + colorI
        "
        @click="goback"
      ></i>
      <ul v-show="bgFlag">
        <li
          :class="{ active: navActive == index }"
          v-for="(list, index) in navLists"
          :key="index"
          @click="changeNavTabs(index)"
        >
          {{ list }}
        </li>
      </ul>
      <i
        class="iconfont icon-fenxiang_2"
        :style="
          'background: rgba(41, 47, 54, ' + bgOpacityI + ');color: ' + colorI
        "
        @click="maskTab"
      ></i>
    </div>
    <div class="detail-swiper">
      <mt-swipe :auto="4000" :show-indicators="true">
        <mt-swipe-item
          v-for="detailData in detailDatas.gallery_list"
          :key="detailData.img_id"
        >
          <img :src="detailData.img_url" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="detail-goods-price public">
      <span
        ><em>{{ parseInt(detailDatas.cost_price) }}</em
        >.00</span
      >
      <span>{{ detailDatas.market_price }}</span>
    </div>
    <div class="detail_title public">
      <h2>{{ detailDatas.goods_name }}</h2>
    </div>
    <div class="detail_outer public">
      <span>累计销量 {{ detailDatas.sales_volume }}</span>
      <span>库存 {{ detailDatas.goods_number }}</span>
      <span>
        {{ detailInfoDatas.province_name }}
        {{ detailInfoDatas.city_name }}</span
      >
    </div>
    <div class="detail-integral public">
      赠送积分：<span>{{ detailDatas.give_integral }} 积分</span>
    </div>
    <div class="detail-serve public">
      服务：<span>
        正品保证 七天无理由退换 闪速配送
      </span>
    </div>
    <div class="detail-send-to public" @click="cityFlag = true">
      送至：<span> {{ province }}- {{ city }}- {{ country }} </span>
      <i class="iconfont icon-jiantou2"></i>
    </div>

    <div class="detail-freight public">
      运费：<span>{{ detailDatas.formated_goods_rate }}</span>
    </div>
    <div class="detail-yixuan public" @click="yxFlag = true">
      已选：<span>{{ yixuan }}个</span>
      <i class="iconfont icon-jiantou2"></i>
    </div>

    <mt-popup
      v-model="yxFlag"
      position="bottom"
      popup-transition="popup-fade"
      class="sz-popup"
    >
      <div class="yx-header">
        <div class="img">
          <img :src="detailDatas.goods_thumb" alt="" />
        </div>
        <div class="yx-title">
          <p>{{ detailDatas.goods_name }}</p>
          <span>{{ detailDatas.cost_price }}</span>
          <i>库存：{{ detailDatas.goods_number }}</i>
          <div class="ok" @click="yxFlag = false">&times;</div>
        </div>
      </div>
      <div class="yx-goods-number">
        <p>数量</p>
        <button @click="minusNum">-</button>
        <input type="text" v-model.number="yixuan" />
        <button @click="addNum">+</button>
      </div>
      <div class="yx-btn">
        <button>立即购买</button>
        <button @click="addCar">加入购物车</button>
      </div>
    </mt-popup>

    <mt-popup
      v-model="cityFlag"
      popup-transition="popup-fade"
      position="bottom"
      class="city-popup"
    >
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      <button
        style="margin:2rem auto;display:block;background:#efefef;width:6.6rem;height:4rem;color:#999"
        @click="cityFlag = false"
      >
        确定
      </button>
    </mt-popup>

    <mt-navbar v-model="selected" id="title1">
      <mt-tab-item id="tab1">商品详情</mt-tab-item>
      <mt-tab-item id="tab2">规格参数</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab1">
        <div class="tab1-content" v-html="detailDatas.desc_mobile"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <div class="tab2-content">
          <table>
            <tr
              v-for="(detailData, index) in detailDatas.attr_parameter"
              :key="index"
            >
              <td>{{ detailData.attr_name }}</td>
              <td>{{ detailData.attr_value }}</td>
            </tr>
          </table>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <div
      class="detail-pinglun"
      id="title2"
      style="width:100%;height:100rem"
    ></div>

    <div class="share-mask" v-show="maskFlag" @click="maskFlag = false">
      <div class="share-content">
        <div
          class="share-item"
          v-show="weixinShow"
          @click="showshareinfo = true"
        >
          <div class="iconfont icon-weixin"></div>
          <div class="text">发送给好友</div>
        </div>
        <div class="share-item" @click="showsharePosterFn">
          <div class="iconfont icon-haibaofenxiang"></div>
          <div class="text">生成海报</div>
        </div>
      </div>
    </div>
    <ShareInfo :showshareinfo="showshareinfo" @closeShareInfo="getShareInfo" />
    <SharePoster
      :showsharePoster="showsharePoster"
      @gbShowsharePoster="getSharePoster"
      :posterDatas="posterDatas"
    />
    <footer>
      <div class="goods-fot-left">
        <div class="fot-item">
          <i class="iconfont icon-dkw_xiaoxi"></i>
          <span>客服</span>
        </div>
        <div class="fot-item">
          <i class="iconfont icon-shoucang1"></i>
          <span>收藏</span>
        </div>
        <router-link to="/cart" class="fot-item">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
          <em>{{ cartSum }}</em>
          <div v-if="addFlag">+{{ yixuan }}</div>
        </router-link>
      </div>
      <div class="goods-fot-right">
        <button @click="addCar">加入购物车</button>
        <button>立即购买</button>
      </div>
    </footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import catis from "@/assets/json/city";
// import { isWeixin } from "@/utils/index";
import ShareInfo from "./components/Share-info";
import debounce from "lodash.debounce";
import SharePoster from "./components/Share-poster";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    ShareInfo,
    SharePoster,
  },
  data() {
    //这里存放数据
    return {
      navLists: ["商品", "详情", "评论"],
      navActive: 0,
      selected: "tab1",
      url: "/goods/show",
      params: {
        goods_id: 1153,
      },
      type: "post",
      obj: {},
      yixuan: 1,
      yxFlag: false,
      cityFlag: false,
      slots: [
        {
          flex: 1,
          values: Object.keys(catis),
          className: "slot1",
          textAlign: "center",
          defaultIndex: 0,
        },
        {
          divider: true,
          content: "-",
          className: "slot2",
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center",
        },
        {
          divider: true,
          content: "-",
          className: "slot4",
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center",
        },
      ],
      province: "",
      city: "",
      country: "",
      bgOpacityHeader: 0,
      bgOpacityI: 0.4,
      colorI: "#fff",
      bgFlag: false,
      maskFlag: false,
      weixinShow: true,
      showshareinfo: false,
      showsharePoster: false,
      addFlag: false,
      addTimer: null,
    };
  },
  //监听属性 类似于data概念
  computed: {
    detailDatas() {
      return this.$store.state.detailDatas;
    },
    detailInfoDatas() {
      return this.$store.state.detailInfoDatas;
    },
    posterDatas() {
      return this.$store.state.posterDatas;
    },
    cartSum() {
      let cartSum = 0;
      this.$store.state.cartDatas.forEach((item) => {
        cartSum += item.value;
      });
      return cartSum;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getDetailDatas() {
      this.obj = {
        url: this.url,
        params: this.params,
        type: this.type,
      };
      this.$store.dispatch("actChangeDetail", this.obj);
    },
    onValuesChange(picker, values) {
      picker.setSlotValues(1, Object.keys(catis[values[0]]));
      picker.setSlotValues(2, catis[values[0]][values[1]]);
      this.province = values[0];
      this.city = values[1];
      this.country = values[2];
    },
    changeNavTabs(index) {
      this.$nextTick(() => {
        this.navActive = index;
        let ele = document.querySelector("#title" + index);
        let top = ele.offsetTop - window.scrollY;
        window.scrollBy({ top, behavior: "smooth" });
      });
    },
    scrollChangeOpacity() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      let opacity = top / 200;
      this.bgOpacityHeader = opacity > 0.9 ? 0.9 : opacity;
      this.bgOpacityI = opacity > 0.4 ? 0 : 0.4;
      this.colorI = opacity > 0.4 ? "#777" : "#fff";
      this.bgFlag = opacity > 0.4 ? true : false;
    },
    goback() {
      window.history.back();
    },
    maskTab() {
      this.maskFlag = true;
      // if (!isWeixin()) {
      //   this.weixinShow = false;
      // }
    },
    getShareInfo(data) {
      this.showshareinfo = data;
    },

    scrollChange: debounce(function() {
      let headerHeight = this.$refs.header.offsetHeight;
      const { scrollY } = window;

      const titles = [];
      for (var i = 0; i < 3; i++) {
        titles.push(document.querySelector("#title" + i));
      }
      titles.reduce((total, title, index) => {
        if (
          !document.querySelector("#title0") &&
          !document.querySelector("#title1") &&
          !document.querySelector("#title2")
        ) {
          return;
        }
        if (total) return total;
        if (scrollY + headerHeight < title.offsetTop + title.offsetHeight) {
          this.navActive = index;
          total = true;
        }
        return total;
      }, false);
    }, 500),

    showsharePosterFn() {
      this.showsharePoster = true;
      this.maskFlag = false;
    },
    getSharePoster(data) {
      this.showsharePoster = data;
    },

    minusNum() {
      if (this.yixuan > 1) {
        this.yixuan--;
      }
    },
    addNum() {
      if (this.yixuan < this.detailDatas.goods_number) {
        this.yixuan++;
      }
    },
    addCar() {
      this.yxFlag = false;
      this.addFlag = true;
      this.addTimer = setTimeout(() => {
        this.addFlag = false;
      }, 1000);

      let detailDatas = this.$store.state.detailDatas;
      var isCart = this.$store.state.cartDatas.find((item) => {
        if (item.goods_id == detailDatas.goods_id) {
          item.value += Number(this.yixuan);
        }
        return item.goods_id == detailDatas.goods_id;
      });
      if (!isCart) {
        var addCartDatas = {
          goods_id: detailDatas.goods_id,
          goods_name: detailDatas.goods_name,
          shop_price: detailDatas.shop_price,
          market_price: detailDatas.market_price,
          goods_thumb: detailDatas.goods_thumb,
          value: 1,
          isSelect: true,
        };
      }
      this.$store.commit("changeCartDatas", addCartDatas);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.params.goods_id = this.$route.params.gId;
    this.getDetailDatas();
    this.$nextTick(() => {
      this.slots[0].defaultIndex = 15;
    });
    window.addEventListener("scroll", this.scrollChangeOpacity, false);
    document.addEventListener("scroll", this.scrollChange, false);
    let oTop = document.documentElement || document.body;
    oTop.scrollTop = 0;
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollChangeOpacity, false);
    document.removeEventListener("scroll", this.scrollChange, false);
  }, //生命周期 - 销毁完成
};
</script>
<style lang="less">
.html,
body {
  background-color: #f4f4f4;
  padding-bottom: 5rem;
}
.detail-page {
  .public {
    width: calc(100% - 2rem);
    padding: 1rem;
    display: flex;
    background-color: #fff;
  }

  .detail-header {
    width: calc(100% - 4rem);
    padding: 0 2rem;
    height: 4rem;
    line-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    i {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      line-height: 2.5rem;
      text-align: center;
      transition: all 0.3s linear;
    }
    ul {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        flex: 1;
        text-align: center;
        height: 4rem;
      }
      .active {
        color: red;
        border-bottom: 2px solid red;
        height: 3.8rem;
      }
    }
  }
  .detail-swiper {
    width: 100%;
    height: 37.5rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .detail-goods-price {
    height: 3rem;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    span {
      &:first-child {
        color: rgb(242, 14, 40);
        font-weight: bold;
        em {
          font-style: normal;
          font-size: 2.4rem;
        }
      }
      &:last-child {
        color: rgb(153, 153, 153);
        vertical-align: text-bottom;
        margin-left: 8px;
        text-decoration: line-through;
      }
      &::before {
        content: "￥";
      }
    }
  }
  .detail_title {
    height: 4.4rem;
    h2 {
      font-weight: 400;
    }
  }
  .detail_outer {
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    color: #999;
  }
  .detail-integral {
    height: 3rem;
    line-height: 3rem;
    color: #999;
    font-size: 1.4rem;
    border-bottom: 1px solid #f6f6f9;
    margin-top: 0.5rem;
    span {
      color: #333;
    }
  }
  .detail-serve {
    height: 3rem;
    line-height: 3rem;
    color: #999;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    span {
      color: #333;
    }
  }
  .detail-send-to {
    display: block;
    height: 3rem;
    line-height: 3rem;
    color: #999;
    font-size: 1.4rem;
    span {
      color: #333;
    }
    i {
      color: #333;
      float: right;
    }
  }
  .detail-freight {
    height: 3rem;
    line-height: 3rem;
    color: #999;
    font-size: 1.4rem;
    padding-top: 0;
    margin-bottom: 0.5rem;
    span {
      color: #333;
    }
  }
  .detail-yixuan {
    height: 3rem;
    display: block;
    line-height: 3rem;
    color: #999;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    span {
      color: #333;
    }
    i {
      color: #333;
      float: right;
    }
  }

  .mint-navbar {
    .mint-tab-item {
      .mint-tab-item-label {
        font-size: 1.4rem;
      }
    }
    .is-selected {
      color: red;
      border: none;

      &::before {
        content: "";
        width: 5rem;
        height: 0.1rem;
      }
    }
  }
  .mint-tab-container {
    background-color: #fff;
    .tab1-content {
      img {
        width: 100%;
      }
      .tools {
        display: none;
      }
      // .section {
      //   width: 100%;
      //   img {
      //     width: 100%;
      //     .tools {
      //       display: none;
      //     }
      //   }
      // }
    }
    .tab2-content {
      width: 96%;
      padding: 0 2% 2rem;
      table {
        width: 98%;
        border-collapse: collapse;
        margin: 1rem auto 0;

        tr {
          color: 333;
          td {
            width: 80%;
            line-height: 2rem;
            border: 1px solid #dadada;
            padding: 0.5rem 1rem;
            &:first-child {
              width: 20%;
            }
          }
        }
      }
    }
  }

  footer {
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    .goods-fot-left,
    .goods-fot-right {
      height: 5rem;
      display: flex;
    }
    .goods-fot-left {
      width: 44%;
      justify-content: center;
      align-items: center;
      .fot-item {
        height: 5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        i {
          font-size: 2rem;
        }
        em {
          position: absolute;
          top: 0;
          right: 0.6rem;
          height: 1.8rem;
          width: 1.8rem;
          border-radius: 50%;
          background-color: #f44;
          color: #fff;
          text-align: center;
          line-height: 1.8rem;
          font-style: normal;
        }
        div {
          color: #f44;
          font-size: 2rem;
          width: 100%;
          position: absolute;
          text-align: center;
          z-index: 99;
          font-weight: bold;
          font-family: Arial, Helvetica, sans-serif;
          opacity: 0;
          top: 0rem;
          animation: moveNum 1s linear;
        }
        @keyframes moveNum {
          0% {
            top: 1;
            opacity: 0;
          }
          50% {
            top: -3rem;
            opacity: 1;
          }
          100% {
            top: -3rem;
            opacity: 0;
          }
        }
      }
    }
    .goods-fot-right {
      width: 56%;
      justify-content: center;
      align-items: center;
      button {
        flex: 1;
        display: block;
        height: 5rem;
        font-size: 1.6rem;
        background-color: #f44;
        color: #fff;
        &:last-child {
          background-color: #ff976a;
        }
      }
    }
  }

  .sz-popup {
    width: 100%;
    height: 32vh;
    background-color: #fff;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    .yx-header {
      padding: 1.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .img {
        width: 9.2rem;
        height: 9.2rem;
        border-radius: 1rem;
        overflow: hidden;
        margin-top: -3.3rem;
        box-shadow: 2px 2px 15px rgba(46, 58, 76, 0.17) !important;
        img {
          width: 100%;
        }
      }
      .yx-title {
        width: calc(100% - 9.2rem);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        p {
          font-size: 1.5rem;
          padding: 0 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          padding-left: 1.5rem;
          font-size: 1.8rem;
          color: #f92028;
        }
        i {
          font-style: normal;
          padding-left: 1.5rem;
          color: #888;
        }
        .ok {
          width: 3rem;
          height: 3rem;
          position: absolute;
          top: 0;
          right: 0;
          font-size: 2.6rem;
          line-height: 1.2rem;
          text-align: center;
        }
      }
    }
    .yx-goods-number {
      padding: 1.1rem;
      line-height: 30px;
      font-size: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: calc(100% - 10rem);
        color: #888;
      }
      button {
        height: 3rem;
        width: 3rem;
      }
      input {
        width: 4rem;
        height: 2.6rem;
        padding: 1px;
        border: 1px solid #eee;
        border-width: 1px 0;
        color: #666;
        font-size: 14px;
        text-align: center;
        line-height: 2.6rem;
      }
    }
    .yx-btn {
      width: 100%;
      height: 5rem;
      button {
        width: 50%;
        height: 5rem;
        color: #fff;
        background-color: #fba534;
        &:last-child {
          background-color: #f92028;
        }
      }
    }
  }

  .city-popup {
    width: 100%;
    height: 40vh;
    background-color: #fff;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
  }

  .share-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(41, 47, 54, 0.4);
    z-index: 99;
    transition: all 0.3s linear;
    .share-content {
      position: absolute;
      bottom: 0;
      z-index: 100;
      background-color: #fff;
      width: 100%;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .share-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        height: 5rem;
        width: 30%;
        .iconfont {
          font-size: 2.5rem;
          color: #80d640;
        }
      }
    }
  }
}
</style>
