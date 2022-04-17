<script setup>
import { useStore } from 'vuex'
import { ArrowLeft, Search, Edit } from '@element-plus/icons-vue'
import { getCurrentInstance, onMounted, ref, reactive } from 'vue'
import AtomsList from './AtomsList.vue'
const store = useStore()
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
  },]
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
const show = ()=> {
  console.log('hh')
  atomsList.value = store.getters.test_tree2
}
</script>

<template>
  <div class="nscm-main">
    <el-container>
      <el-aside width="300px">
        <el-menu
          mode="vertical"
          default-active="000"
          class="nscm-sidebar"
          background-color="#ffffff"
        >
          <el-menu-item :index="'000'" :key="'000'">全部</el-menu-item>
          <el-sub-menu
            v-for="(submenus, index) in sideMenusAtom.value"
            :index="index + 1 + ''"
            :key="index"
          >
            <template #title>{{ submenus.serviceClass }}</template>
            <el-menu-item
              v-for="(item, subIndex) in submenus.serviceDivisions"
              :index="(index + 1) + '-' + (subIndex + 1)"
              :key="subIndex"
              @click="show"
            >{{ item.serviceDivision }}</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-page-header :icon="ArrowLeft" content="全部" class="nscm-page-header" @back=""></el-page-header>
          <div class="nscm-functionBar">
            <el-input v-model="keyWord" placeholder="输入关键字" :prefix-icon="Search" />
            <el-button type="primary" :icon="Edit" circle></el-button>
          </div>
        </el-header>
        <el-main>
          <AtomsList :atomsList="atomsList.value"></AtomsList>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
    

    
<style lang='scss' scoped>
.nscm-main {
  .el-header {
    background-color: #ffffff;
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
  background-color: #E4E4E4 ;
  height: calc(100vh - 60px);
}
.nscm-sidebar {
  padding-top: 25px;
  margin: 10px 10px 0 10px;
  height: calc(100% - 10px);
  border-radius: 10px;
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
    