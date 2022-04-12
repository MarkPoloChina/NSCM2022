<script setup>
import { useStore } from 'vuex'
import { ArrowLeft, Search, Edit } from '@element-plus/icons-vue'
import PPOSWorkplace from './PPOSWorkplace.vue'
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
const { proxy } = getCurrentInstance()
const sideMenusAtom = reactive({ value: [] })
const atomsList = reactive({
  value: [{
    serviceId: '',
    serviceName: '',
    serviceClass: '',
    serviceDivision: '',
    serviceDescription: '',
    serviceIn: {},
    serviceOut: {},
    serviceVersion: '',
    serviceDeploy: '',
    isAvailable: true,
    requestMethod: ''
  }],
})
const keyWord = ref('')
onMounted(() => {
  proxy.$http.AtomsAPI.getTreeOfAtoms().then((rsp) => {
    sideMenusAtom.value = rsp.data
  })
  proxy.$http.AtomsAPI.getAtoms().then((rsp) => {
    atomsList.value = rsp.data
  })
})
</script>

<template>
  <div class="nscm-main">
    <el-container>
      <el-aside width="300px">
        <el-input v-model="keyWord" placeholder="输入关键字" :prefix-icon="Search" class="nscm-search" />
        <div class="nscm-sidebar-title">原子服务</div>
        <el-menu mode="vertical" default-active="000" class="nscm-sidebar" background-color="#F5F5F5">
          <el-menu-item :index="'000'" :key="'000'">全部</el-menu-item>
          <el-sub-menu v-for="(submenus, index) in sideMenusAtom.value" :index="index + 1 + ''" :key="index">
            <template #title>{{ submenus.serviceClass }}</template>
            <el-menu-item v-for="(item, subIndex) in submenus.serviceDivisions" dragable
              :index="(index + 1) + '-' + (subIndex + 1)" :key="subIndex"><span></span>{{ item.serviceDivision }}</el-menu-item>
          </el-sub-menu>
        </el-menu>
        <div class="nscm-sidebar-title">流程图导入</div>
        <div class="nscm-template"><button>智能预测</button></div>
        <div class="nscm-template"><button>使用模板</button></div>
        <div class="nscm-template"><button>使用暂存</button></div>
      </el-aside>
      <el-container>
        <el-header>
          <!-- <el-page-header :icon="ArrowLeft" content="全部" class="nscm-page-header"></el-page-header> -->
          <div class="nscm-functionBar">
            <el-button :icon="Search" circle />
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="success" :icon="Edit" circle />
            <el-button type="info" :icon="Edit" circle />
            <el-button type="warning" :icon="Edit" circle />
            <el-button type="danger" :icon="Edit" circle />
          </div>
        </el-header>
        <el-main>
          <PPOSWorkplace></PPOSWorkplace>
        </el-main>
      </el-container>
    </el-container>  </div>
</template>

<style lang='scss'>
.nscm-main {
  .el-header {
    background-color: #F5F5F5;
    height: 60px;
    position: relative;
    margin-top: 10px;
    border-radius: 10px;
  }

  .el-main {
    height: 100%; // 减去内页头和外页头
    padding: 5px;
  }

  .el-container {
    height: 100%;
  }

  background-color: #E4E4E4;
  height: calc(100vh - 60px);
}

.nscm-sidebar {
  padding-top: 25px;
  margin: 10px 10px 10px 10px;
  border-radius: 10px;
}

.nscm-page-header {
  line-height: 30px;
}

.nscm-functionBar {
  position: absolute;
  right: 20px;
  top: 15px;
}

.nscm-search {
  margin: 10px 5px 10px 5px;
  width: calc(100% - 10px);

  input {
    height: 50px;
    border-radius: 30px;
  }
}

.nscm-sidebar-title {
  margin: 10px 10px 0 15px;
  background-image: linear-gradient(#2580eb, #97b6fe);
  display: inline-block;
  color: white;
  padding: 10px;
  border-radius: 20px;
}

.nscm-template {
  height: 70px;
  width: calc(100% - 20px);
  background-color: #F5F5F5;
  margin: 20px 10px 0 10px;
  position: relative;
  border-radius: 5px;

  button {
    background-image: linear-gradient(#2580eb, #97b6fe);
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 230px;
    height: 50px;
    border-radius: 5px;
    color: white;
    font-size: large;
  }
}
</style>
  