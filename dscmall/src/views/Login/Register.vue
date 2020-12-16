<!--  -->
<template>
  <div class="register-page">
    <div class="register-header">
      <i class="iconfont icon-jiantou3" @click="goback"></i>
    </div>
    <h2>新用户注册</h2>
    <div class="register-content">
      <div class="register-input">
        <i class="iconfont icon-daifukuan"></i>
        <input type="text" placeholder="请输入图片验证码" />
        <button>1234</button>
      </div>
      <div class="register-input">
        <i class="iconfont icon-daifukuan"></i>
        <input type="text" placeholder="请输入手机号" style="width:65%" />
        <button
          style="width:25%;background:#fff;border-left:1px solid #d7d7d7;color:#888"
        >
          获取验证码
        </button>
      </div>
      <div class="register-input">
        <i class="iconfont icon-daifukuan"></i>
        <input type="text" placeholder="请输入短信验证码" style="width:90%" />
      </div>
      <div class="register-input">
        <i class="iconfont icon-daifukuan"></i>
        <input type="text" placeholder="请输入登陆密码" style="width:90%" />
      </div>
      <button class="register-btn">立即注册</button>
      <p>
        若您输入的手机号未注册，将会进入注册流程。注册即视为同意<span
          @click="popupVisible = true"
          >《用户协议》</span
        >
      </p>
      <div class="register-fot">
        <router-link to="/login?id=1">账号密码登陆</router-link>
        <i class="iconfont icon-jiantou2"></i>
      </div>
    </div>

    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div class="popup-content" v-html="articleDetailDatas.content"></div>
      <button @click="popupVisible = false">确定</button>
    </mt-popup>
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
      popupVisible: false,
      url: "/article/show",
      params: {
        id: 82,
      },
      type: "post",
    };
  },
  //监听属性 类似于data概念
  computed: {
    articleDetailDatas() {
      return this.$store.state.articleDetailDatas;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goback() {
      window.history.back();
    },
    getDatas() {
      let obj = {
        url: this.url,
        params: this.params,
        type: this.type,
      };
      this.$store.dispatch("actChangeArticleDetailDatas", obj);
    },
  },
  mounted() {
    this.getDatas();
  },
};
</script>
<style lang="less">
html,
body {
  background-color: #fff;
}
.register-page {
  width: 100%;
  .register-header {
    width: calc(100% - 4rem);
    padding: 1.5rem;
    height: 4.4rem;
    color: #bdbdbd;
  }
  h2 {
    width: calc(100% - 4rem);
    height: 5rem;
    line-height: 5rem;
    font-weight: 400;
    font-size: 3rem;
    padding: 0 2rem;
  }
  .register-content {
    padding: 2rem;
    width: calc(100% - 4rem);
    .register-input {
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #ddd;
      i {
        width: 10%;
        color: #bdbdbd;
      }
      input {
        width: 70%;
        height: 4rem;
        color: #666;
        &::-webkit-input-placeholder {
          color: #c0c4d6;
        }
      }
      button {
        width: 20%;
        height: 3rem;
      }
    }
    .register-btn {
      width: 100%;
      height: 4rem;
      border-radius: 0.5rem;
      margin: 1.5rem 0 0.5rem 0;
      background: #f92028;
      color: #fff;
    }
    p {
      font-size: 1.3rem;
      color: #888;
      margin-top: 0.5rem;
      line-height: 1.5;
      span {
        color: #4b89dc;
      }
    }
  }
  .register-fot {
    display: flex;
    margin-top: 4rem;
    color: #f92028;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    a {
      color: #f92028;
    }
  }

  .mint-popup {
    width: 24rem;
    height: 48rem;
    padding: 1.1rem;
    border-radius: 0.5rem;
    .popup-content {
      width: 100%;
      height: calc(100% - 4.2rem);
    }
    button {
      width: 100%;
      line-height: 4.2rem;
      background: #f44;
      color: #fff;
    }
  }
}
</style>
