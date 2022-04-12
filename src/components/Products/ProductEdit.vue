<template>
  <div>
    <el-descriptions title="产品属性修改" :column="3" border>
      <template #extra>
        <el-button type="primary">保存</el-button>
      </template>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">产品名</div>
        </template>
        <el-input v-model="product.productName"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">产品类型</div>
        </template>
        <el-select v-model="product.productType" placeholder="Select" size="large">
          <el-option v-for="item in [{ value: product.productType, label: product.productType }]" :key="item.value"
            :label="item.label" :value="item.value" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">币种</div>
        </template>
        <el-select v-model="product.currencyType" placeholder="Select" size="large">
          <el-option v-for="item in [{ value: product.currencyType, label: product.currencyType }, { value: 'RMB', label: 'RMB' }]"
            :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">标签</div>
        </template>
        <el-select v-model="product.productTags" multiple placeholder="Select">
          <el-option v-for="item in product.productTags" :key="item" :label="item" :value="item" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">产品风险</div>
        </template>
        <el-select v-model="product.riskLevel" placeholder="Select" size="large">
          <el-option v-for="item in [{ value: product.riskLevel, label: product.riskLevel }]" :key="item.value"
            :label="item.label" :value="item.value" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">计息规则</div>
        </template>
        {{ product.interestRule }}
      </el-descriptions-item>
    </el-descriptions>  </div>
</template>
  
<script setup>
defineProps({
  product: Object
})
// todo
</script>
  
<style lang='scss' scoped>
</style>
  