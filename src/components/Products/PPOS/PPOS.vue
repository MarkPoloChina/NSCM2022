<script setup>
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { ArrowLeft, Search, Edit, Check, FolderChecked, ArrowLeftBold, ArrowRightBold, CloseBold, Help, Grid, Plus, ZoomIn, Download, Delete } from '@element-plus/icons-vue'
import PPOSWorkplace from './PPOSWorkplace.vue'
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
const store = useStore()
const { proxy } = getCurrentInstance()
const zoom = ref(100)
const value1 = ref(false)
const sideMenusAtom = reactive({ value: [] })
const order = ref(-1)
const fileList = reactive({ value: [] })
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
  }],
})
const getAtomName = (service) => {
  let str = ''
  atomsList.value.forEach((ele) => {
    if (ele.serviceId === service.serviceId) {
      str = ele.serviceName
    }
  })
  return str
}
const goCV = () => {
  ElMessage.info('正在识别')
  dialogVisible.value = false
  order.value = 9
  
}
const keyWord = ref('')
const dialogVisible = ref(false)
onMounted(() => {
  proxy.$http.AtomsAPI.getAtoms().then((rsp) => {
    atomsList.value = rsp.data
    proxy.$http.AtomsAPI.getTreeOfAtoms().then((rsp) => {
      sideMenusAtom.value = rsp.data
    })
  })
  test_tree.value = {}
})
let fun = () => {
  test_tree.value = store.getters.test_getAtom
}
let sleep = function(fun,time){
  setTimeout(()=>{
    fun();
  },time);
}
const atomStartAdd = (atom, event) => {
  event.dataTransfer.setData("Text", atom.serviceId);
}
const test_tree = reactive({ value: [] })
</script>

<template>
  <div class="nscm-main">
    <el-container>
      <el-aside width="300px">

        <!-- <div class="nscm-sidebar-title">原子服务构件</div> -->
        <div class="nscm-sidebar-title">原子服务</div>
        <el-collapse class="nscm-sidebar-2" accordion>
          <el-input v-model="keyWord" placeholder="输入关键字" :prefix-icon="Search" class="nscm-search" />
          <el-collapse-item :name="index" v-for="(submenus, index) in sideMenusAtom.value" :index="index + 1 + ''"
            :key="index">
            <template #title>
              <div class="nscm-sideMenu-item">{{ submenus.serviceClass }}</div>
            </template>
            <el-collapse accordion>
              <el-collapse-item v-for="(item, subIndex) in submenus.serviceDivisions"
                :index="(index + 1) + '-' + (subIndex + 1)" :key="subIndex">
                <template #title>
                  <div class="nscm-sideMenu-item-sub">{{ item.serviceDivision }}</div>
                </template>
                <div class="nscm-atom-drag-container">
                  <div v-for="(service, surIndex) in item.services" draggable="true" class="nscm-atom-drag"
                    :index="(index + 1) + '-' + (subIndex + 1) + '-' + (surIndex + 1)" :key="surIndex"
                    @dragstart="atomStartAdd(service, $event)">
                    {{ getAtomName(service) }}
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
        </el-collapse>
        <!-- <el-collapse class="nscm-sidebar-2" accordion>
          <el-collapse-item :name="index" v-for="(submenus, index) in test_tree.value" :index="index + 1 + ''"
            :key="index">
            <template #title>
              <div class="nscm-sideMenu-item">{{ submenus.serviceClass }}</div>
            </template>
            <el-collapse accordion>
              <el-collapse-item v-for="(item, subIndex) in submenus.serviceDivisions"
                :index="(index + 1) + '-' + (subIndex + 1)" :key="subIndex">
                <template #title>
                  <div class="nscm-sideMenu-item-sub">{{ item.serviceDivision }}</div>
                </template>
                <div class="nscm-atom-drag-container">
                  <div v-for="(service, surIndex) in item.services" draggable="true" class="nscm-atom-drag"
                    :index="(index + 1) + '-' + (subIndex + 1) + '-' + (surIndex + 1)" :key="surIndex" @dragstart="atomStartAdd(service,$event)">
                    {{ service }}
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
        </el-collapse> -->
        <div class="nscm-sidebar-title">流程图导入</div>
        <div class="nscm-template"><button>智能预测</button></div>
        <div class="nscm-template"><button>使用模板</button></div>
        <div class="nscm-template"><button>使用暂存</button></div>
        <div class="nscm-template"><button @click="dialogVisible = true">图片导入</button></div>
        <el-dialog v-model="dialogVisible" title="图片识别导入" width="50%">
          <span>选择一张图片来导入</span>
          <br>
          <el-upload list-type="picture-card" :limit="1" :auto-upload="false" :file-list="fileList.value">
            <el-icon>
              <Plus />
            </el-icon>
          </el-upload>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="goCV">确认</el-button>
            </span>
          </template>
        </el-dialog>
      </el-aside>
      <el-container>
        <el-header>
          <div class="nscm-main-title">
            <el-icon :size="45">
              <grid />
            </el-icon><span>当前编排-大额存款产品</span>
          </div>
          <div class="nscm-functionBar">
            <div class="nscm-zoom">
              <el-slider v-model="zoom" :min="50" :max="200" :marks="{ 50: '50%', 100: '100%', 200: '200%' }" />
            </div>
            <el-switch v-model="value1" active-text="原子服务推荐" class="nscm-sw" />
            <el-tooltip effect="dark" content="撤销" placement="bottom">
              <el-button :icon="ArrowLeftBold" circle @click="order = 0" />
            </el-tooltip>
            <el-tooltip effect="dark" content="重做" placement="bottom">
              <el-button :icon="ArrowRightBold" circle @click="order = 1" />
            </el-tooltip>
            <el-tooltip effect="dark" content="检查合理性" placement="bottom">
              <el-button type="primary" :icon="Help" circle />
            </el-tooltip>
            <el-tooltip effect="dark" content="清空" placement="bottom">
              <el-button type="danger" :icon="CloseBold" circle @click="order = 2" />
            </el-tooltip>
            <el-tooltip effect="dark" content="暂存" placement="bottom">
              <el-button type="warning" :icon="FolderChecked" circle />
            </el-tooltip>
            <el-tooltip effect="dark" content="提交" placement="bottom">
              <el-button type="success" :icon="Check" circle size="large" />
            </el-tooltip>
          </div>
        </el-header>
        <el-main>
          <PPOSWorkplace :order="order" @done="order = -1"></PPOSWorkplace>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang='scss'>
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

  background-color: #E4E4E4;
  height: calc(100vh - 60px);
}

.nscm-sidebar-2 {
  margin: 10px 10px 10px 10px;
  border-radius: 10px;
  background-color: #ffffff;
  border-radius: 10px;

  div {
    background-color: transparent;
  }

}

.nscm-page-header {
  line-height: 30px;
}

.nscm-atom-drag-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.nscm-atom-drag {
  display: inline-block;
  width: 80px;
  height: 50px;
  background-color: white;
  border: 1px solid rgb(110, 110, 110);
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  user-select: none;
  cursor: pointer;
}

.nscm-functionBar {
  position: absolute;
  right: 20px;
  top: 15px;

  .nscm-zoom {
    display: inline-block;
    position: absolute;
    width: 300px;
    right: 500px;
    top: -5px;
  }

  .nscm-sw {
    margin-right: 40px;
  }
}

.nscm-main-title {
  display: inline-block;
  height: 50px;
  position: absolute;
  left: 20px;
  top: 10px;
  line-height: 50px;
  font-size: 25px;

  span {
    position: absolute;
    width: 500px;
  }
}

.nscm-search {
  margin: 10px 5px 10px 5px;
  width: calc(100% - 10px);

  .icon {
    color: black;
    width: 100px !important;
    height: 100px !important;
  }

  input {
    height: 50px;
    border-radius: 30px;
    background-color: #E4E4E4;
  }
}

.nscm-sidebar-title {
  margin: 10px 10px 0 15px;
  background-image: linear-gradient(#2580eb, #97b6fe);
  display: inline-block;
  color: white;
  padding: 10px;
  border-radius: 20px;
}

.nscm-template {
  height: 80px;
  width: calc(100% - 20px);
  background-color: white;
  margin: 20px 10px 0 10px;
  position: relative;
  border-radius: 5px;

  button {
    background-image: linear-gradient(#2580eb, #97b6fe);
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 230px;
    height: 50px;
    border-radius: 10px;
    color: white;
    font-size: large;
  }
}

.nscm-sideMenu-item {
  margin: 5px 5px 5px 15px;
}

.nscm-sideMenu-item-sub {
  margin: 5px 5px 5px 25px;
}
</style>
  