<script setup>
import { reactive, ref } from 'vue'
defineProps({
  dialogVisible: Boolean,
  currentAtom: Object
})
defineEmits(['closeDialog'])
const tableData = reactive({ value: [{ name: '处理状态', type: 'Object', expect: 'Object.Code', expection: '200', next: '' }, { name: '处理状态', type: 'Object', expect: 'Object.Code', expection: '异常', next: '' }] })
const newExpection = (scope) => {
  tableData.value.push({ name: '处理状态', type: 'Object', expect: 'Object.Code', expection: '', next: '' })
}
</script>
<template>
  <div>
    <el-dialog v-model="dialogVisible" title="流程逻辑编辑" width="60%">
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="$emit('closeDialog')">取消</el-button>
          <el-button type="primary" @click="$emit('closeDialog')">提交</el-button>
        </span>
      </template>
      <el-descriptions title="上下文信息" direction="vertical" :column="4" border>
        <el-descriptions-item label="当前组件">{{ currentAtom.pieceId }}</el-descriptions-item>
        <el-descriptions-item label="当前类型">{{ currentAtom.pieceKind }}</el-descriptions-item>
        <el-descriptions-item label="下一组件">是否符合地域限制</el-descriptions-item>
      </el-descriptions>
      <div class="nscm-title2">参数选单</div>
      <el-table :data="tableData.value" border style="width: 100%" stripe>
        <el-table-column prop="name" label="参数名" width="180" />
        <el-table-column prop="type" label="参数型" width="180" />
        <el-table-column prop="expect" label="参数预期型" />
        <el-table-column prop="expection" label="参数预期值">
          <template #default="scope">
            <el-input v-model="scope.row.expection" placeholder="输入预期值" v-if="scope.row.expection!=='异常'"/>
            <span v-else>异常</span>
          </template>
        </el-table-column>
        <el-table-column prop="next" label="下一出口">
          <template #default="scope">
            <el-select v-model="scope.row.next" placeholder="选择对应操作" size="large" v-if="scope.row.expection!=='异常'">
              <el-option v-for="item in ['下一出口','结束','转到异常']" :key="item" :label="item" :value="item" />
            </el-select>
            <el-select v-model="scope.row.next" placeholder="选择对应操作" size="large" v-else>
              <el-option v-for="item in ['重新请求本接口','结束']" :key="item" :label="item" :value="item" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button type="text" size="small" @click="newExpection(scope)">新预期值</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<style lang='scss' scoped>
.nscm-title2 {
  width: 100%;
  text-align: left;
  height: 100;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
}
</style>
  