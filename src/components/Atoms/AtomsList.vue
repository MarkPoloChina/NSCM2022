<script setup>
import { getCurrentInstance, onMounted, reactive } from 'vue'
const { proxy } = getCurrentInstance()
const atomsList = reactive({value:[]})
onMounted(()=> {
  proxy.$http.AtomsAPI.getAtoms().then((rsp)=>{
    atomsList.value = rsp.data
  })
})
</script>

<template lang="">
  <div class="nscm-atoms-main">
    <el-collapse v-for="(atom, index) in atomsList.value">
      <el-collapse-item :title="atom.serviceName" :name="index">
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