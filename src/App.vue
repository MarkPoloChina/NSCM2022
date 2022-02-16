<script setup>
import { CreditCard, Cpu, Warning } from '@element-plus/icons-vue'
const topMenus = [
  { key: '001', title: '原子服务' },
  { key: '002', title: '产品编排' },
  { key: '003', title: '关于' }]
</script>

<template>
  <header>
    <span id="nscm-logo">XX银行产品编排系统</span>
    <div class="nscm-topbar">
      <el-menu mode="horizontal" default-active="1" :ellipsis="false">
        <el-menu-item v-for="(item, index) in topMenus" :index="index + 1 + ''" :key="item.key">
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
html {
  height: 100%;
}
body {
  margin: 0;
  overflow-y: hidden;
}
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
  overflow-y: hidden;
}
</style>
