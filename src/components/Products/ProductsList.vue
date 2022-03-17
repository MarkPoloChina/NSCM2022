<script setup>
import { getCurrentInstance, onMounted, reactive } from 'vue'
const { proxy } = getCurrentInstance()
const productsList = reactive({value:[]})
onMounted(()=> {
  proxy.$http.ProductsAPI.getProducts().then((rsp)=>{
    productsList.value = rsp.data
  })
})
</script>

<template lang="">
  <div class="nscm-atoms-main">
    <el-collapse v-for="(product, index) in productsList.value">
      <el-collapse-item :title="product.productName" :name="index">
        <div class="nscm-atoms-atomCard">
          <button>11</button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss">
// .nscm-atoms-main {
//   margin-top: 100px;
// }
.nscm-atoms-atomCard {
  height: 300px;
  background-color: rgba(0, 217, 255, 0.281);
  border-radius: 10px;
}
</style>