<!--  -->
<template>
  <div class="home-seckill">
    <div class="seckill-header">
      <div class="header-top">
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp"
          alt=""
        />
        <p>
          据结束还剩：<span>{{ hours | zeroize }}</span
          ><i>:</i><span>{{ minutes | zeroize }}</span
          ><i>:</i><span>{{ seconds | zeroize }}</span>
        </p>
      </div>
      <div class="header-timer">
        <div
          class="item"
          v-for="(list, index) in listTimer"
          :key="index"
          :class="{ active: flag == index }"
          @click="tabLi(index)"
        >
          <i>{{ list.time }}:00</i><span>{{ msg | msgFn(index) }}</span>
        </div>
      </div>
    </div>
    <div
      class="seckill-goods-list"
      v-for="(list, index) in listTimer"
      :key="index"
      v-show="flag == index"
    >
      <span>{{ list.content }}</span>
    </div>
    <div class="seckill-footer"></div>
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
      flag: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      msg: "即将开始",
      listTimer: [
        { time: "8", dataIndex: 0, content: "页面一" },
        { time: "10", dataIndex: 1, content: "页面二" },
        { time: "16", dataIndex: 2, content: "页面三" },
        { time: "24", dataIndex: 3, content: "页面四" },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  filters: {
    zeroize: function(value) {
      return (value = value < 10 ? "0" + value : value);
    },
    msgFn: function(value, index) {
      return index == 0 ? (value = "抢购中") : value;
    },
  },

  //方法集合
  methods: {
    tabLi(index) {
      this.flag = index;
    },
    getTimers() {
      let nowDate = new Date();
      if (this.listTimer[1].time <= nowDate.getHours()) {
        this.listTimer.push(this.listTimer[0]);
        this.listTimer.shift(this.listTimer[0]);
        this.getTimers();
      }
    },
    times() {
      let newtime = new Date(); //现在的时间
      let years = newtime.getFullYear(); //现在的年
      let months = newtime.getMonth() + 1; //现在的月
      let days = newtime.getDate(); //现在的日期
      let customTiem =
        years +
        "-" +
        months +
        "-" +
        days +
        " " +
        this.listTimer[1].time +
        ":00:00"; //根据现在时间写的固定时间值
      let oldtime = new Date(customTiem); //固定时间
      let chatime = oldtime - newtime; //时间差
      this.hours = Math.floor(chatime / 1000 / 60 / 60); //现在时间离固定时间的小时数
      chatime -= this.hours * 1000 * 60 * 60;
      this.minutes = Math.floor(chatime / 1000 / 60); //现在时间离固定时间的分钟数
      chatime -= this.minutes * 1000 * 60;
      this.seconds = Math.floor(chatime / 1000); //现在时间离固定时间的秒数
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getTimers();
    this.time = setInterval(this.times, 1000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.home-seckill {
  margin: 1rem 1rem 0;
  border-radius: 1rem;
  background-color: #fff;
  .seckill-header {
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2.2rem 1rem 1.2rem 1.5rem;
      height: 100%;
      img {
        width: 10rem;
      }
      p {
        span {
          display: inline-block;
          padding: 0.3rem 0.4rem;
          background: linear-gradient(-88deg, #ff4f2e, #f91f28);
          font-size: 1.4rem;
          border-radius: 0.5rem;
          color: #fff;
        }
        i {
          font-style: normal;
          color: #f20d23;
          font-weight: 700;
          font-size: 1.6rem;
          margin: 0 0.4rem;
        }
      }
    }
    .header-timer {
      display: flex;
      padding: 0.5rem 0;
      .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 0.8rem;
        color: #999;
        font-size: 1.4rem;
        i {
          font-style: normal;
        }
        span {
          font-size: 1.2rem;
        }
      }
      .active {
        color: #f20d28;
        padding-bottom: 0.6rem;
        border-bottom: 0.2rem solid;
        i {
          font-size: 1.8rem;
          font-weight: 600;
        }
        span {
          font-size: 1.4rem;
        }
      }
    }
  }
  .seckill-goods-list {
    width: 100%;
    height: 20rem;
  }
}
</style>
