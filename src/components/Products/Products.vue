<script setup>
import { ArrowLeft, Search, Edit } from '@element-plus/icons-vue'
import { getCurrentInstance, onMounted, ref, reactive } from 'vue'
import ProductsList from './ProductsList.vue'
const { proxy } = getCurrentInstance()
const sideMenusProducts = reactive({value:[]})
const keyWord = ref('')
onMounted(()=>{
  proxy.$http.ProductsAPI.getTreeOfProducts().then((rsp)=>{
    sideMenusProducts.value = rsp.data
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
          <el-menu-item :index="'000'" :key="'000'">全部</el-menu-item>
          <el-sub-menu
            v-for="(submenus, index) in sideMenusProducts.value"
            :index="index + 1 + ''"
            :key="index"
          >
            <template #title>{{ submenus.productType }}</template>
            <el-menu-item
              v-for="(item, subIndex) in submenus.products"
              :index="(index + 1) + '-' + (subIndex + 1)"
              :key="subIndex"
            >{{ item.productId}}</el-menu-item>
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
        <el-main>
          <ProductsList></ProductsList>
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
  .el-input {
    width: 250px;
  }
  button {
    margin-left: 10px;
  }
}
</style>
    