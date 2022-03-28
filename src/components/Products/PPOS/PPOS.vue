<script setup>
import { useStore } from 'vuex'
import { ArrowLeft } from '@element-plus/icons-vue'
import PPOSWorkplace from './PPOSWorkplace.vue'
import { getCurrentInstance, onMounted, reactive } from 'vue'
const { proxy } = getCurrentInstance()
const atomsList = reactive({value:[]})
onMounted(()=> {
  proxy.$http.AtomsAPI.getAtoms().then((rsp)=>{
    atomsList.value = rsp.data
  })
})
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
          <!-- <el-menu-item :index="'000'" :key="'000'">全部</el-menu-item>
          <el-sub-menu
            v-for="(submenus, index) in atomsList"
            :index="index + 1 + ''"
            :key="index"
          >
            <template #title>{{ submenus.productType }}</template>
            <el-menu-item
              v-for="(item, subIndex) in submenus.products"
              :index="(index + 1) + '-' + (subIndex + 1)"
              :key="subIndex"
            >{{ item.productId}}</el-menu-item>
          </el-sub-menu> -->
          <el-menu-item
              v-for="(item, subIndex) in atomsList.value"
              :index="subIndex+''"
              :key="subIndex"
              draggable="true"
            >{{ item.serviceName}}</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-page-header :icon="ArrowLeft" content="全部" class="nscm-page-header"></el-page-header>
          <div class="nscm-functionBar">
            
          </div>
        </el-header>
        <el-main>
          <PPOSWorkplace></PPOSWorkplace>
        </el-main>
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
    // background-color: #bdbdbd;
    height: calc(100vh - 60px - 60px); // 减去内页头和外页头
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
}
</style>
  