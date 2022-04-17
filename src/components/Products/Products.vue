<script setup>
import { ElMessage } from 'element-plus'
import { ArrowLeft, Search, Edit } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import { getCurrentInstance, onMounted, ref, reactive } from 'vue'
import ProductsList from './ProductsList.vue'
import ProductEdit from './ProductEdit.vue';
const { proxy } = getCurrentInstance()
const sideMenusProducts = reactive({ value: [] })
const keyWord = ref('')
onMounted(() => {
  proxy.$http.ProductsAPI.getTreeOfProducts().then((rsp) => {
    sideMenusProducts.value = rsp.data
  })
})
const isVisble = ref(false)
const editProduct = (product) => {
  curProduct.data = product
  isVisble.value = true
}
const newProduct = () => {
  curProduct.data = {
  "productName": "",
  "productType": "Certificate_Deposits",
  "productTerm": "2.5y",
  "productAGR": 7,
  "currencyType": "",
  "initialDeposit": 0,
  "incrDeposit": 0,
  "personDeposit": 0,
  "dayDeposit": 0,
  "riskLevel": "",
  "inventory": 0,
  "payMethod": "英镑支付",
  "interestRule": "零存整取定期储蓄存款计息法",
  "depositRule": "带息存入",
  "withdrawRule": "全额到期支取",
  "productBlips": "该产品收益高，但是风险也很高",
  "productTags": [
  ],
  "isDiscontinued": true
}
  isVisble.value = true
}
const router = useRouter();
const curProduct = reactive({data:{}})
const close = ()=> {
  // isVisble=false
  ElMessage('正在预测流程图...')
  // setTimeout
  sleep(fun,2000);
}
let fun = () => router.push('/ppos')
let sleep = function(fun,time){
  setTimeout(()=>{
    fun();
  },time);
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
            v-for="(submenus, index) in sideMenusProducts.value"
            :index="index + 1 + ''"
            :key="index"
          >
            <template #title>{{ submenus.productType }}</template>
            <el-menu-item
              v-for="(item, subIndex) in submenus.products"
              :index="(index + 1) + '-' + (subIndex + 1)"
              :key="subIndex"
            >{{ item.productId }}</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-page-header :icon="ArrowLeft" content="全部" class="nscm-page-header"></el-page-header>
          <div class="nscm-functionBar">
            <el-input v-model="keyWord" placeholder="Type something" :prefix-icon="Search" />
            <el-button type="primary" :icon="Edit" circle @click="newProduct"></el-button>
          </div>
        </el-header>
        <el-main>
          <ProductsList @edit-product="editProduct"></ProductsList>
          <el-dialog v-model="isVisble" :title="'属性修改'">
          <ProductEdit :product="curProduct.data" @close="close"></ProductEdit></el-dialog>
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
    height: 100%; 
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
    