<!--  -->
<template>
  <div class="login-box" @keyup.enter="login">
    <p class="title">淳安变电站智能机器人巡检系统</p>
    <div class="login-container demo-input-suffix">
      <el-form :model="dataForm" label-width=".91rem" id="FORM" style="margin-top:1rem">
        <el-form-item label="" hide-required-asterisk>
          <el-input style="width:85%" v-model="dataForm.userName" clearable placeholder="请输入用户名">
            <i slot="prefix" class="el-input_icon el-icon-user" style="color:#02EEFF;font-size:20px;"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input style="width:85%" v-model="dataForm.passWord" type="password" clearable placeholder="请输入密码">
            <i slot="prefix" class="el-input_icon el-icon-goods" style="color:#02EEFF;font-size:20px;"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="dataForm.captcha" style="width:3rem;float:left" clearable placeholder="请输入验证码">
            <i slot="prefix" class="el-input_icon el-icon-picture" style="color:#02EEFF;font-size:20px;"></i>
          </el-input>
          <p style="float:left;width:1.5rem;height:.45rem;margin-left:.15rem">
            <img alt="验证码" height="100%" width="100%" :src="captchaPath" id="code" @click="getCaptcha" />
            <!--            <img style="width:100%;height:100%" alt="验证码" :src="srcyzm" id="code" @click="showImageCode" />-->
          </p>
        </el-form-item>
        <el-button type="primary" class="btn" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import {
    timeFix
  } from '@/utils/util'
  export default {
    data() {
      return {
        dataForm: {
          userName: '',
          password: '',
          uuid: '',
          captcha: ''
        },
        captchaPath: "",
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
      this.getCaptcha()
      sessionStorage.removeItem("token")
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    },
    methods: {
      getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
        })
      },
      // 获取验证码
      getCaptcha() {
        this.dataForm.uuid = this.getUUID()
        this.captchaPath = `/chqdh-server/captcha.jpg?uuid=${this.dataForm.uuid}`
        console.log(this.captchaPath)
      },
      getDay() {
        let day = new Date();
        let yy = day.getFullYear().toString();
        let MM = day.getMonth() + 1 >= 10 ? (day.getMonth() + 1) : '0' + (day.getMonth() + 1);
        let DD = day.getDate() >= 10 ? day.getDate() : '0' + day.getDate();
        return yy + MM + DD
      },
      //登录
      login() {
        let loginParams = {
          'username': this.dataForm.userName,
          'password': this.dataForm.passWord,
          'uuid': this.dataForm.uuid,
          'captcha': this.dataForm.captcha,
          'realDay': this.getDay(),
          'isMobile': false
        }
        this.$axios.post('/chqdh-server/sys/login', loginParams).then((data) => {
          console.log("1111", data)
          if (data.code == 0) {
            this.$message.success("登陆成功")
            sessionStorage.setItem("token", data.ddkj_token)
            this.$router.push({
              path:"/ddindex",
              query:{}
            })
          } else {
            this.$message.error(data.msg)
          }
        })
      },
    }
  }
</script>
<style lang='less' scoped>
  /* @import url(); 引入css类 */
  #video1 {
    width: 8rem; // height: 3rem;
    outline: none;
  }

  html,
  body {
    padding: 0;
    margin-top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .login-box {
    width: 100%;
    height: 100%;
    background: url('../assets/imgs/background.png') no-repeat;
    background-size: 100% 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;

    .title {
      text-align: center;
      color: aqua;
      font-size: .4rem;
      background-color: transparent;
    }

    .login-container {
      width: 6.35rem;
      height: 5.64rem;
      position: absolute;
      top: 52%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      background: url('../assets/imgs/login_form.png') no-repeat;
      background-size: 100% 100%;
      padding-top: .55rem;

      .login-header {
        width: 100%;
        height: 0.68rem;
        padding-top: 15px;
        margin-bottom: 0.45rem;

        p {
          display: block;
          text-align: center;
          margin: 0 auto;
          font-size: 0.25rem;
          color: #fff;
          width: 1.6rem;
          height: 0.53rem;
          border-bottom: 0.01rem solid #1890ff;
          padding-top: 0.1rem;
          box-sizing: border-box;
        }
      }
    }
  }

  .btn {
    border: none;
    height: 0.5rem;
    position: absolute;
    margin-top: 25px;
    font-size: 22.09px;
    width: 73%;
    background-color: #02EEFF;
    // background: url("../assets/imgs/bg-btn.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    border-radius: 5px;
    float: right;
    left: 50%;
    transform: translateX(-50%);
  }

  /deep/ .el-form-item__label {
    font-size: 0.2rem;
    color: #fff;
  }

  /deep/ .el-form-item {
    // margin-bottom: 0.5rem;
  }

  /deep/ .el-input_icon {
    line-height: 2.6;
  }

  /deep/ .el-input__inner {
    background-color: transparent;
    border: 1px solid #02EEFF;
    color: #02EEFF;
    height: .5rem;
  }
</style>
