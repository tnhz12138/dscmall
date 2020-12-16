<!--  -->
<template>
  <div class="index-page" v-infinite-scroll="loadMore">
    <Loading v-if="loadFlag" />
    <div class="index-header" :style="colorObj"></div>
    <div class="index-swiper">
      <Swiper @changeColor="getColor" />
    </div>
    <IndexList1 />
    <IndexNews />
    <IndexPreferential />
    <Seckill />
    <IndexWholesale />
    <IndexList2 />
    <IndexList3 :pat="parnetCol[0]" />
    <IndexList3 :pat="parnetCol[1]" />
    <More @patenttabLi="getData" />
    <List :listdatas="listdatas" :ulIndex="ulIndex" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "@/components/Swiper.vue";
import IndexList1 from "../components/Index-child/Index-list1";
import IndexNews from "../components/Index-child/Index-news";
import IndexPreferential from "../components/Index-child/Index-preferential";
import Seckill from "../components/Index-child/Seckill";
import IndexWholesale from "../components/Index-child/Index-wholesale";
import IndexList2 from "../components/Index-child/Index-list2";
import IndexList3 from "../components/Index-child/Index-list3";
import More from "../components/Index-child/More";
import List from "@/components/List";
import { getHomeList } from "@/api/api";
import Loading from "@/components/Loading";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    IndexList1,
    IndexNews,
    IndexPreferential,
    Seckill,
    IndexWholesale,
    IndexList2,
    IndexList3,
    More,
    List,
    Loading,
  },
  data() {
    //这里存放数据
    return {
      loadFlag: false,
      colorObj: {
        backgroundColor: "rgb(222, 47, 43)",
      },
      colorArr: [
        { backgroundColor: "rgb(222, 47, 43) !important" },
        { backgroundColor: "rgb(15, 93, 243) !important" },
        { backgroundColor: "rgb(0, 154, 142) !important" },
      ],
      parnetCol: [
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/mq7rYptqRIC6iWYkBUfWzdHGrusH4W1sCAQbHLHj.jpeg?imageView2/2/format/webp",
          bgc: "background-color : rgb(204, 183, 161)",
          listChild: [
            {
              imgsrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/123512/13/9287/160399/5f2fd23eE1fa59971/32abc6e0ae1d8f4b.jpg?imageView2/2/format/webp",
              title:
                "得听格子衬衫女长袖2020秋季新款小清新韩版宽松百搭学生春秋装纯棉衬衫大码外套上衣女 天蓝色 M（1",
              price: "78.",
            },
            {
              imgsrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/138880/22/6489/135565/5f4332e6E2b89c8f9/f8e10228bd2d311a.jpg?imageView2/2/format/webp",
              title:
                "【商场同款】哈吉斯HAZZYS 2020秋季风衣女英伦都市时尚风衣外套ASWSH00CH08 米色B",
              price: "3780.",
            },
            {
              imgsrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/115331/14/14477/192572/5f2e9206E6e4684d3/58290ceca2f0d563.jpg?imageView2/2/format/webp",
              title:
                "穆夏百合风衣女中长款秋季外套2020秋装新款连帽抽绳春秋时尚韩版过膝女士休闲宽松薄款收腰显瘦小个子 ",
              price: "128.",
            },
            {
              imgsrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t26908/213/1450429308/307540/cbb02379/5be40e82N3d42693e.jpg?imageView2/2/format/webp",
              title:
                "@头号青年稻草人毛衣男冬学生宽松2018新款高领针织衫韩版潮流个性线衣外套情侣 M03浅灰色 L（建",
              price: "149.",
            },
            {
              imgsrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/148159/24/6167/275804/5f409b76Ede0eb76a/065ca4464c414ed4.jpg?imageView2/2/format/webp",
              title:
                "VVPXXP针织衫男春秋季ins情侣装宽松学院风毛衣套头韩版学生青少年 555黑灰色 XL",
              price: "228.",
            },
            {
              imgsrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/81126/1/8108/96043/5d62703aE2f2ea180/7debbbd245b9be24.jpg?imageView2/2/format/webp",
              title:
                "【正常发货】南极人西服套装男士外套青年韩版修身新郎结婚商务婚礼休闲职业装正装小西装男 二扣黑色西服+",
              price: "78.",
            },
          ],
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/CzzkibenhBz3Jcc8clYHc9imT29vc6InLFdKuN0U.jpeg?imageView2/2/format/webp",
          bgc: "background-color : rgb(44, 77, 105)",
          listChild: [
            {
              imgsrc:
                "https://img.alicdn.com/imgextra/i2/2087981999/O1CN011v6EW81QdaJzw6uUK_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "DR DARRY RING心月套链钻石吊坠月亮心形镶钻项链正品会员专享",
              price: "2799.",
            },
            {
              imgsrc:
                "https://img.alicdn.com/imgextra/i1/2087981999/O1CN01tDhXg71QdaLSsql0t_!!2087981999-0-lubanu-s.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "DR FLOWER LOVE系列玫瑰耳饰钻石群镶耳钉白红黄18K金浪漫送女友",
              price: "4399.",
            },
            {
              imgsrc:
                "https://img.alicdn.com/imgextra/i1/2087981999/O1CN01AGF6i81QdaLdC5UH4_!!2087981999-0-lubanu-s.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "DR WITH YOU系列挚爱相随粉钻求婚钻戒钻石戒指下单请咨询客服",
              price: "37179.",
            },
            {
              imgsrc:
                "https://img.alicdn.com/imgextra/i4/2087981999/O1CN01jBi5GB1QdaLOg3Zcb_!!2087981999-0-lubanu-s.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "DR SWEETIE系列心连心套链心形钻石项链吊坠白红黄18K金会员专享",
              price: "4599.",
            },
            {
              imgsrc:
                "https://img.alicdn.com/imgextra/i4/749901026/O1CN014W3Xi11JRwxncENXe_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "casio旗舰店SHE-4529防水女士手表钢表带卡西欧官网SHEEN官方正品",
              price: "2028.",
            },
            {
              imgsrc:
                "https://img.alicdn.com/imgextra/i4/2087981999/O1CN01qKjdsN1QdaLpzbLn8_!!2087981999-0-lubanu-s.jpg_800x800.jpg?imageView2/2/format/webp",
              title: "DR TRUE LOVE系列情圆一生求婚钻戒结婚钻石戒指女戒白18K金",
              price: "7089.",
            },
          ],
        },
      ],

      listdatas: [],
      ulIndex: "0",
      page: 1,
      size: 10,
      type: "is_best",
      url: "/goods/type_list",
    };
  },
  //监听属性 类似于data概念
  computed: {},

  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getColor(data) {
      if (this.$route.path == "/home/index") {
        this.colorObj = this.colorArr[data];
        this.$emit("hcolor", this.colorObj);
      } else {
        this.$emit("hcolor", this.colorObj);
      }
    },

    getData(data) {
      this.ulIndex = data.index;
      this.page = 1;
      this.loadFlag = true;
      this.listdatas = [];
      this.type = data.type;
      this.url = data.url;
      this.getBestDatas(this.url, this.page, this.size, this.type);
    },
    async getBestDatas(url, page, size, type) {
      let result = await getHomeList(url, {
        page: page,
        size: size,
        type: type,
      });
      // console.log(result);
      // console.log(result.data);
      if (result.data) {
        this.loadFlag = false;
        let resultArr = result.data;
        this.listdatas = this.listdatas.concat(resultArr);
      } else if (result.data == "undefined") {
        alert("网络出现故障");
      }
    },
    loadMore() {
      this.page++;
      this.getBestDatas(this.url, this.page, this.size, this.type);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let type = this.type;
    let url = this.url;
    let index = this.ulIndex;
    this.getData({
      type,
      url,
      index,
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {
    this.colorObj = {
      backgroundColor: "rgb(222, 47, 43)",
    };
    this.getColor();
  }, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.index-page {
  margin-bottom: 4.9rem;
  .index-header {
    width: 100%;
    height: 5rem;
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
  }
  .index-swiper {
    position: relative;
    top: -5rem;
  }
}
</style>
