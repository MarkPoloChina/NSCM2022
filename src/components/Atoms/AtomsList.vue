<script setup>
import { getCurrentInstance, onMounted, reactive, defineProps, computed } from 'vue'
const { proxy } = getCurrentInstance()
defineProps({
  atomsList: Array
})
onMounted(() => {

})
</script>

<template>
  <div class="nscm-atoms-main">
    <el-collapse v-for="(atom, index) in atomsList">
      <el-collapse-item :title="atom.serviceName" :name="index">
        <div class="nscm-atoms-atomCard">
          <el-descriptions title="原子服务详情" :column="3" border>
            <template #extra>
              <el-button type="primary">详情</el-button>
            </template>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">原子服务id</div>
              </template>
              {{ atom.serviceId }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">原子服务一分支</div>
              </template>
              {{ atom.serviceClass }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">原子服务二分支</div>
              </template>
              {{ atom.serviceDivision }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">原子服务版本号</div>
              </template>
              {{ atom.serviceVersion }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">用途描述</div>
              </template>
              {{ atom.serviceDescription }}
            </el-descriptions-item>
          </el-descriptions>
          <br />
          <el-descriptions title="运行参数" :column="2" border>
            <template #extra>
              <el-button type="primary">详情</el-button>
            </template>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">服务可用性</div>
              </template>
              <el-tag v-if="atom.isAvailable === true" type="success">可用</el-tag>
              <el-tag v-else type="danger">不可用</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">HTTP请求方法</div>
              </template>
              {{ atom.requestMethod }}
            </el-descriptions-item>
          </el-descriptions>
          <br />
          <el-descriptions title="原子服务参数表" :column="2" border>
            <template v-for="service, index in atom.serviceIn">
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">入口参数名</div>
                </template>
                {{ index }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">参数类型</div>
                </template>
                {{ service }}
              </el-descriptions-item>
            </template>
          </el-descriptions>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss">
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