<script setup>
import { CreditCard, Cpu, SetUp } from '@element-plus/icons-vue'
const topMenus = [
  { key: '001', title: '原子服务', url: '/atom' },
  { key: '002', title: '产品编排', url: '/product' },
  { key: '003', title: '服务编排', url: '/ppos' }]
const base_url = 'https://markpolo-1303103554.cos.ap-nanjing.myqcloud.com/others'
</script>

<template>
  <header v-if="$route.name != 'login'">
    <div id="nscm-logo">
      <div id="nscm-img">
        <img :src="base_url + '/img/xfzp2.png'" />
      </div>
      <div id="nscm-title">
        <span>湘丰智排</span>
      </div>
    </div>
    <div class="nscm-topbar">
      <el-menu mode="horizontal" :default-active="$route.path" :ellipsis="false" router>
        <el-menu-item v-for="item in topMenus" :index="item.url" :key="item.key">
          <el-icon v-if="item.key == '001'">
            <cpu />
          </el-icon>
          <el-icon v-if="item.key == '002'">
            <credit-card />
          </el-icon>
          <el-icon v-if="item.key == '003'">
            <set-up />
          </el-icon>
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </div>
  </header>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
#app > header {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
}
#nscm-logo {
  display: inline-block;
  position: relative;
  height: 100%;
  #nscm-img {
    display: inline-block;
    height: 100%;
    margin-left: 40px;
    margin-right: 50px;
    img {
      padding-top: 5px;
      width: 50px;
    }
  }
  #nscm-title {
    display: inline-block;
    height: 100%;
    font-size: 28px;
    font-weight: bold;
    vertical-align: top;
    padding-top: 8px;
  }
  #nscm-title::before {
    content: "";
    position: absolute;
    right: 135px;
    width: 5px;
    height: 50px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: linear-gradient(#2580eb, #97b6fe);
    border-radius: 3px;
  }
}

.nscm-topbar {
  float: right;
  margin-right: 40px;
}
</style>
<style>
html {
  height: 100%;
}
body {
  margin: 0;
}
</style>
