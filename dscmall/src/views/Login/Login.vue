<!--  -->
<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="tabs">
        <div
          class="tabs-item"
          :class="{ active: loginFlag == 0 }"
          @click="changeLoginTabs(0)"
        >
          短信登陆
        </div>
        <div
          class="tabs-item"
          :class="{ active: loginFlag == 1 }"
          @click="changeLoginTabs(1)"
        >
          账号登陆
        </div>
      </div>
      <div class="tabs-content">
        <!-- 短信登陆 -->
        <div class="tabs-message" v-if="loginFlag == 0">
          <div class="tabs-input">
            <input
              type="text"
              placeholder="验证码"
              name="captcha"
              style="width:70%"
              v-model="captcha"
            />
            <img
              src="http://localhost:3000/adminapi/captcha"
              alt=""
              @click="getCaptcha"
              ref="imgs"
              style="width:30%"
            />
          </div>
          <div class="tabs-input">
            <input
              type="text"
              v-model="phone"
              maxlength="11"
              placeholder="请输入手机号"
              name="phone"
            />
            <button v-if="!num" @click="getPc">{{ text }}</button>
            <button v-else>({{ num }})</button>
          </div>
          <div class="tabs-input">
            <input
              type="text"
              placeholder="输入验证码"
              style="width:100%"
              name="code"
              v-model="code"
            />
          </div>
          <div class="tabs-input">
            <button
              style="width:100%;background:#f44;color:#fff"
              @click="msgLogin"
            >
              立即登录
            </button>
          </div>
        </div>

        <!-- 账号登陆 -->
        <div class="tabs-login" v-if="loginFlag == 1">
          <div class="tabs-input">
            <input
              type="text"
              placeholder="输入账号"
              style="width:100%"
              name="user_name"
              v-model="user_name"
            />
          </div>
          <div class="tabs-input">
            <input
              type="password"
              placeholder="输入密码"
              style="width:90%;border-right:none"
              name="login_password"
              v-model="password"
              v-if="passwordShow"
            />
            <input
              type="text"
              placeholder="输入密码"
              style="width:90%;border-right:none"
              name="login_password"
              v-model="password"
              v-else
            />
            <button
              style="width:10%;border:1px solid #efefef;background:#fff;border-left:none"
            >
              <i
                class="iconfont icon-xianshi"
                @click="passwordShow = !passwordShow"
                :class="{ active: !passwordShow }"
              ></i>
            </button>
          </div>
          <div class="tabs-input">
            <input
              type="text"
              placeholder="验证码"
              style="width:70%"
              v-model="captcha"
            />
            <img
              src="http://localhost:3000/adminapi/captcha"
              alt=""
              @click="getCaptcha"
              ref="imgs"
              style="width:30%"
            />
          </div>
          <div class="tabs-input">
            <button
              style="width:100%;background:#f44;color:#fff"
              @click="unameLogin"
            >
              立即登录
            </button>
          </div>
        </div>
      </div>
      <div class="toRegister">
        <router-link to="/register">没有账号,去注册</router-link>
      </div>
    </div>
    <mt-popup
      v-model="msgShow"
      popup-transition="popup-fade"
      @click="msgShow = !msgShow"
    >
      <p>{{ msg }}<span>&#9888;</span></p>
    </mt-popup>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { getPhoneCode, getPhoneLogin, getLogin } from "@/api/api";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      lists: ["短信登陆", "账号登陆"],
      passwordShow: true,
      loginFlag: 0,
      num: 0,
      text: "获取验证码",
      phone: "",
      timer: null,
      code: "",
      captcha: "",
      user_name: "",
      password: "",
      msgShow: false,
      msg: "",
    };
  },
  computed: {
    validatePhone() {
      return /^1[3|5|6|7|8][0-9]{9}$/.test(this.phone);
    },
  },

  methods: {
    changeLoginTabs(index) {
      this.loginFlag = index;
    },
    getCaptcha() {
      this.$refs.imgs.src = "http://localhost:3000/adminapi/captcha";
    },
    async getPc() {
      if (this.validatePhone) {
        this.num = 60;
        this.text = "重新获取验证码";
        this.timer = setInterval(() => {
          this.num--;
          if (!this.num) {
            clearInterval(this.timer);
          }
        }, 1000);
        let result = await getPhoneCode(
          "/getcode",
          { phone: this.phone },
          "post"
        );
        console.log(result);
      } else {
        Toast({
          message: "手机格式不正确",
          position: "center",
          duration: 2000,
        });
      }
    },

    async msgLogin() {
      let params = {
        code: this.code,
        phone: this.phone,
        captcha: this.captcha,
      };
      let result = await getPhoneLogin("/phonelogin", params, "post");

      if (result.status == 200) {
        this.$router.push("/home");
        this.$store.commit("getUserInfo", result.token);
      } else {
        this.msg = result.msg;
        this.msgShow = true;
      }
    },

    async unameLogin() {
      let params = {
        user_name: this.user_name,
        login_password: this.password,
        captcha: this.captcha,
      };
      let result = await getLogin("/login", params, "post");

      if (result.status == 200) {
        this.$router.push("/home");
        this.$store.commit("getUserInfo", result.token);
      } else if (result.status == 1010) {
        this.msg = result.msg;
        this.msgShow = true;
        this.getCaptcha();
        this.captcha = "";
      } else {
        this.msg = result.msg;
        this.msgShow = true;
      }
    },
  },

  mounted() {
    this.loginFlag = this.$route.query.id;
  },
};
</script>
<style lang="less">
.login-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 555;
  background-color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-content {
    width: calc(100% - 2rem);
    margin: 0 1rem;
    .logo {
      width: 10rem;
      height: 10rem;
      border: 1rem solid #efefef;
      border-radius: 50%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .tabs {
      width: 100%;
      height: 4.4rem;
      line-height: 4.4rem;
      background-color: #efefef;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      font-size: 1.4rem;
      margin-top: 2rem;
      .tabs-item {
        flex: 1;
      }
      .active {
        background-color: #f44;
        color: #fff;
      }
    }
    .tabs-content {
      width: 100%;
      .tabs-message,
      .tabs-login {
        width: 100%;
        .tabs-input {
          height: 4rem;
          margin: 1.5rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          input {
            border: 1px solid #efefef;
            height: 4rem;
            box-sizing: border-box;
            text-indent: 1rem;
            width: 70%;
          }
          button,
          img {
            height: 4rem;
            width: 30%;
            .active {
              color: red;
            }
          }
        }
      }
    }
    .toRegister {
      a {
        display: block;
        text-align: center;
        color: #f44;
        line-height: 4.4rem;
        text-decoration: underline;
      }
    }
  }
  .mint-popup {
    width: 18rem;
    height: 4rem;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 4rem;
    p {
      span {
        margin-left: 0.2rem;
        color: red;
      }
    }
  }
}
</style>
