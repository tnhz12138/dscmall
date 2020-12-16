<!--  -->
<template>
  <div class="index-list1">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <ul>
          <li v-for="(list, index) in lists1" :key="index">
            <img :src="list.src" alt="" />
            <span>{{ list.img }}</span>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li v-for="(list, index) in lists2" :key="index">
            <img :src="list.src" alt="" />
            <span>{{ list.img }}</span>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li v-for="(list, index) in lists3" :key="index">
            <img :src="list.src" alt="" />
            <span>{{ list.img }}</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      lists1: [
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
          img: "潮流服饰",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png?imageView2/2/format/webp",
          img: "箱包配饰",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
          img: "美容护肤",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/8vjN7XPR9BD1BGqGYDGmJiQvk1UPH4duF4csjuaV.png?imageView2/2/format/webp",
          img: "母婴儿童",
        },

        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
          img: "手机数码",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/xnzngK6mJ1VamCDXKd5GH51C3asWfCnd8btRiZn2.png?imageView2/2/format/webp",
          img: "微社区",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/3QggHJzSCrK1osf8DUYQxCUC3RhxaUySDkc5EMoC.gif?imageView2/2/format/webp",
          img: "拼团",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
          img: "预售",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/jUsageRXcEmvz0G8QutdBJ9IJgUxFsxgWAgdpHeA.png?imageView2/2/format/webp",
          img: "拍卖",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/KhlceHTjkqz49Bzijf4HWtumIuIf1E45a7l1aOAJ.gif?imageView2/2/format/webp",
          img: "超值礼包",
        },
      ],
      lists2: [
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
          img: "家具装修",
        },
      ],
      lists3: [
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
        {
          src:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/wyMGxcr9uxhB5YtWewXYMDw0UGczfGyBBxc9Hphv.png?imageView2/2/format/webp",
          img: "限时秒杀",
        },
      ],
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
.index-list1 {
  margin: 1rem 1rem 0;
  border-radius: 1rem 1rem 0 0;
  height: 200px;
  margin-top: -4rem;
  background-color: #fff;
  .mint-swipe {
    width: 100%;
    .mint-swipe-item {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        li {
          width: 20%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
          }
          span {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
  .mint-swipe-indicators {
    bottom: 0.5rem;
    .mint-swipe-indicator {
      width: 1.5rem;
      height: 0.4rem;
      border-radius: 0%;
      margin: 0;
      background: linear-gradient(-88deg, #ff4f2d, #f91f27);
    }
    .is-active {
      border-radius: 0.2rem;
      opacity: 1;
    }
  }
}
</style>
