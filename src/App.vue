<script setup>
import { CreditCard, Cpu, Warning } from '@element-plus/icons-vue'
const topMenus = [
  { key: '001', title: '原子服务', url: '/atom' },
  { key: '002', title: '产品编排', url: '/product' },
  { key: '003', title: '关于', url: '/ppos'}]
</script>

<template>
  <header>
    <span id="nscm-logo">湘丰智排</span>
    <div class="nscm-topbar">
      <el-menu mode="horizontal" default-active="1" :ellipsis="false" router>
        <el-menu-item v-for="(item, index) in topMenus" :index="item.url" :key="item.key">
          <el-icon v-if="item.key == '001'">
            <cpu />
          </el-icon>
          <el-icon v-if="item.key == '002'">
            <credit-card />
          </el-icon>
          <el-icon v-if="item.key == '003'">
            <warning />
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
  height: 59px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.658);
}
#nscm-logo {
  position: absolute;
  left: 5%;
  height: 56px;
  line-height: 56px;
  font-size: 28px;
}
.nscm-topbar {
  display: inline-block;
  position: absolute;
  right: 5%;
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
