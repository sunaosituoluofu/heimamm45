<template>
  <div class="login-container">
    <div class="left">
      <div class="title-box">
        <img class="login-img" src="../../assets/矢量智能对象 拷贝 9.png" alt />
        <div class="title">黑马面面</div>
        <div class="line"></div>
        <div class="sub-title">用户登录</div>
      </div>

      <!-- 表单 -->

      <el-form ref="form" label-width="0px" class="form-w">
        <el-form-item>
          <el-input placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="phone"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input show-password placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-row>
            <el-col :span="17">
              <el-input placeholder="请输入验证码" v-model="code" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="7">
              
              <img
                class="captcha"
                ref="captcha"
                @click="getCaptcha"
                alt
                src="http://127.0.0.1/heimamm/public/captcha?type=login"
              />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 文字点击链接 -->

        <el-form-item class="text-box">
          <el-checkbox v-model="checked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <!-- 登录验证 -->

        <el-form-item class="btn-box">
          <el-button type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>

    <img src="../../assets/login_banner_ele.png" alt />
  </div>

  <!-- 注册按钮 -->
</template>

<script >
export default {
  name: "login",
  data() {
    return {
      phone: "",
      password: "",
      code: "",
      checked: false
    };
  },

  methods: {
    // submitForm(formName){

    // },
    getCaptcha() {
      // 时间戳
      this.$refs.captcha.src = `http://127.0.0.1/heimamm/public/captcha?type=login&${Date.now()}`;
    }
  }
};
</script>

<style lang="less">
.login-container {
  background: linear-gradient(
    -225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  align-items: center;

  .left {
    padding-left: 48px;
    box-sizing: border-box;
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;

    .title-box {
      display: flex;
      align-items: center;
      margin-top: 48px;
      margin-bottom: 29px;
      .login-img {
        margin-left: 48px;
        margin-right: 16px;
      }
      .title {
        font-size: 24px;
        font-weight: 400;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .sub-title {
        font-size: 22px;
        font-weight: 400;
      }
    }
  }

  .form-w {
    width: 394px;
    margin-top: 29px;

    .captcha {
      display: block;
      width: 110px;
      height: 42px;
    }
  }

  .el-input--prefix .el-input__inner {
    height: 45px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(204, 207, 213, 1);
    border-radius: 4px;
  }

  .text-box {
    font-size: 14px;
    margin-bottom: 28px;
    .el-checkbox {
      display: flex;
      align-items: center;

      .el-checkbox__label {
        display: flex;
        align-items: center;
      }
    }
  }

  .btn-box {
    .el-button {
      width: 100%;
      margin-left: 0;
      margin-bottom: 28px;
    }
  }
}
</style>