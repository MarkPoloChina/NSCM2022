<script setup>
import { getCurrentInstance, onMounted, reactive } from 'vue'
const { proxy } = getCurrentInstance()
const productsList = reactive({ value: [] })
onMounted(() => {
  proxy.$http.ProductsAPI.getProducts().then((rsp) => {
    productsList.value = rsp.data
  })
})
defineEmits(['EditProduct'])
</script>

<template>
  <div class="nscm-atoms-main">
    <el-collapse v-for="(product, index) in productsList.value">
      <el-collapse-item :title="product.productName" :name="index">
        <div class="nscm-atoms-atomCard">
          <el-descriptions title="产品技术信息" :column="3" border>
            <template #extra>
              <el-button type="primary">修改流程图</el-button>
            </template>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">产品id</div>
              </template>
              {{ product.productId }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">产品版本号</div>
              </template>
              {{ product.productVersion }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">最后修改日期</div>
              </template>
              {{ product.modifiedTime }}
            </el-descriptions-item>
          </el-descriptions>
          <br />
          <el-descriptions title="产品属性" :column="4" border>
            <template #extra>
              <el-button type="primary" @click="$emit('EditProduct',product)">修改属性</el-button>
              <el-button type="success" @click="$emit('EditProduct',product)">新增属性</el-button>
            </template>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">产品名</div>
              </template>
              {{ product.productName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">产品类型</div>
              </template>
              {{ product.productType }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">币种</div>
              </template>
              {{ product.currencyType }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">标签</div>
              </template>
              <el-tag v-for="tag in product.productTags">{{ tag }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">产品风险</div>
              </template>
              {{ product.riskLevel }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">计息规则</div>
              </template>
              {{ product.interestRule }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-collapse-item>
    </el-collapse>  </div>
</template>

<style lang="scss">
// .nscm-atoms-main {
//   margin-top: 100px;
// }
.nscm-atoms-main {
  .el-collapse-item__header {
    background-color: #ffffff;
    border-radius: 7px;
    padding-left: 10px;
    font-weight: bold;
    font-size: large;
    margin-bottom: 10px;
  }

  .el-collapse-item__wrap {
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 5px;
  }
}

.nscm-atoms-atomCard {
  height: auto;
  border-radius: 10px;
  padding: 10px;
}
</style>