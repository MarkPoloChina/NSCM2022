<script setup>
import { ArrowLeft, Search, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
const sideMenusAtom = [
  { key: '001', title: '检验类', menus: [{ key: '101', title: '证件审查接口' }, { key: '102', title: '用户信息检验接口' }] },
  { key: '002', title: '计算类', menus: [{ key: '103', title: '利息计算接口' }, { key: '104', title: '结息期计算接口' }] },
  { key: '003', title: '控制类', menus: [{ key: '105', title: '白名单控制接口' }] },
  { key: '004', title: 'IO类', menus: [{ key: '106', title: '流水储存接口' }] }]
const keyWord = ref('')
</script>

<template>
  <div class="nscm-main">
    <el-container>
      <el-aside width="200px">
        <el-menu
          mode="vertical"
          default-active="000"
          class="nscm-sidebar"
          background-color="#e9e9e9"
        >
          <el-menu-item :index="'000'" :key="'000'">全部</el-menu-item>
          <el-sub-menu
            v-for="(submenus, index) in sideMenusAtom"
            :index="index + 1 + ''"
            :key="submenus.key"
          >
            <template #title>{{ submenus.title }}</template>
            <el-menu-item
              v-for="(item, subIndex) in submenus.menus"
              :index="(index + 1) + '-' + (subIndex + 1)"
              :key="item.key"
            >{{ item.title }}</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-page-header :icon="ArrowLeft" content="全部" class="nscm-page-header"></el-page-header>
          <div class="nscm-functionBar">
            <el-input v-model="keyWord" placeholder="Type something" :prefix-icon="Search" />
            <el-button type="primary" :icon="Edit" circle></el-button>
          </div>
        </el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
    

    
<style lang='scss' scoped>
.nscm-main {
  .el-header {
    background-color: #adadad;
    height: 60px;
    position: relative;
  }
  .el-main {
    background-color: #bdbdbd;
    height: calc(100vh);
  }
}
.nscm-sidebar {
  padding-top: 25px;
  height: 100%;
}
.nscm-page-header {
  line-height: 60px;
}
.nscm-functionBar {
  position: absolute;
  right: 20px;
  top: 15px;
  .el-input {
    width: 250px;
  }
  button {
    margin-left: 10px;
  }
}
</style>
    