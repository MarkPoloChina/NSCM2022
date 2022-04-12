<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ username: '', password: '' })
</script>

<template>
  <div id="nscm-login">
    <div id="nscm-login-logo">
      <img src="https://markpolo-1303103554.cos.ap-nanjing.myqcloud.com/others/img/xfzp2.png" />
      <span>湘丰智排</span>
    </div>
    <div id="nscm-login-form">
      <el-form :model="form" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button round @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang='scss' scoped>
#nscm-login {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 1200px;
  height: 800px;
  background-image: linear-gradient(to bottom left, #2580eb, #97b6fe);
  border-radius: 15px;
  #nscm-login-logo {
    height: 100%;
    width: 500px;
    display: inline-block;
    position: relative;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
    img {
      width: 400px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    > span {
      color: #2580eb;
      font-family: "字魂35号-经典雅黑";
      font-size: 50px;
      position: absolute;
      bottom: 150px;
      width: 500px;
      text-align: center;
    }
  }
  #nscm-login-form {
    display: inline-block;
    height: 200px;
    width: 600px;
    margin: 280px 25px 100px 25px;
    padding: 50px 50px 50px 0;
    vertical-align: top;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
  }
}
</style>
  