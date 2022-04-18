<script setup>
import Axios from 'axios';
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref, getCurrentInstance, watch } from 'vue';
import { useStore } from 'vuex';
import PPOSContext from './PPOSContext.vue';
const store = useStore()
const { proxy } = getCurrentInstance()
const faceDrop = (e) => {
  console.log('handle_drop-当元素在目的地放下时触发')
  e.preventDefault()

}
const prop = defineProps({
  order:Number
})
let list = reactive({ value: [] })
let obj = reactive({ value: {} })
const dialogVisible = ref(false)
const step = ref(0)
watch(prop,(newV,oldV)=>{
  if (newV.order===0) {
    step.value--
  } else if (newV.order===1) {
    step.value++
  } else if (newV.order===2) {
    step.value=0
  } else if (newV.order === 9) {
    setTimeout(()=>{
      list.value = buildLevel(reactive(store.getters.test_getJson))
  
  obj.value = store.getters.test_getJson
    
  },2000);
  }
  // list.value = buildLevel(reactive((store.getters.test_getStep)[step.value]))
  
  emit('done')
})
const emit = defineEmits(["done"])
onMounted(() => {

  // Axios.get('http://nicklorry.top:8091/bdp/api/ppos/test/getJson',{
  //       params: {param: 1}
  //     }).then((rsp)=>{
  //   list.value = buildLevel(reactive(rsp.data.data))
  //   obj.value = rsp.data.data
  //   console.log(list.value)
  // })
  // list.value = buildLevel(reactive(store.getters.test_getJson))
  // // list.value = buildLevel(reactive((store.getters.test_getStep)[step.value]))
  // obj.value = store.getters.test_getJson
  // const test_json = reactive(store.getters.test_getJson)
  // list.value = jsonToLevel(test_json)
})
// const jsonToLevel = (json_obj) => {
//   const startPieceId = 'start'
//   const pieceMap = json_obj.pieceMap
//   let tar = []
//   tar.push([pieceMap[startPieceId]])
//   while (true) {
//     let curLevel = new Set
//     tar[tar.length - 1].forEach((ele) => {
//       if (ele.nextPieces.length !== 0) {
//         ele.nextPieces.forEach((ele2) => {
//           curLevel.add(pieceMap[ele2.nextPieceId])
//           tar[tar.length - 1].forEach((ele3, index) => {
//             if (ele2.nextPieceId === ele3.pieceId) {
//               tar[tar.length - 1].splice(index, 1)
//             }
//           })
//         })
//       }
//     })
//     if (Array.from(curLevel).length === 0) break
//     tar.push(Array.from(curLevel))
//   }
//   return tar
// }
const buildLevel = (json_obj) => {
  console.log(json_obj)
  let list = new Array
  let map_obj = json_obj.pieceMap
  list.push([map_obj.start])
  while (true) {
    let waitToPush = new Set
    list[list.length - 1].forEach((piece) => {
      if (!piece.next && piece.type !== 'EndPiece') {
        if (map_obj[piece.nextId] === undefined) {
          console.log(piece.nextId)
        }
        waitToPush.add(map_obj[piece.nextId])
      } else if (piece.type !== 'EndPiece') {
        piece.next.forEach((child_piece) => {
          if (map_obj[child_piece.nextId] === undefined) {
            console.log(child_piece.nextId)
          }
          waitToPush.add(map_obj[child_piece.nextId])
        })
      } else {

      }
    })
    if (waitToPush.size === 0) {
      break
    } else {
      list[list.length - 1].forEach((piece, index) => {
        if (waitToPush.has(piece)) {
          list[list.length - 1].splice(index, 1)
        }
      })
      list.push(Array.from(waitToPush))
      console.log(Array.from(waitToPush))
    }
  }
  return list
}
const allowDrop = (e) => {
  // console.log('003')
  e.preventDefault()
}
const ondragenter = (e) => {
  // console.log('004')
  e.preventDefault()
}
const atomContext = (atom, next) => {
  dialogVisible.value = true
  currentAtom.value = atom
  for (let i in obj.value.pieceMap) {
  }
}
const atomAddBtw = (atom, event) => {
  event.preventDefault()
  console.log(atom)
  step.value++
  list.value = buildLevel(reactive((store.getters.test_getStep)[step.value]))
  obj.value = store.getters.test_getJson
  if (event.dataTransfer.getData("Text") === '10000015' && atom.nextId === 'Pro-01') {
    ElMessage.error('参数校验错误，找不到入口参数依赖')
  }

}
const currentAtom = reactive({ value: {} })
</script>

<template>
  <div class="ppos-main">
    <div class="ppos-container">
      <div class="ppos-main-view">
        <div v-for="ele in list.value" class="ppos-level">
          <div class="ppos-comp" v-for="ele2 in ele">
            <el-popover placement="right" title="原子服务推荐" :width="200" trigger="contextmenu">
              <div class="nscm-atom-drag-container">
                <div v-for="(service, surIndex) in ['检测用户信息', '释放库存']" draggable="true" class="nscm-atom-drag"
                  :index="'' + (surIndex + 1)" :key="surIndex" @dragstart="atomStartAdd(service, $event)">
                  {{ service }}
                </div>
              </div>
              <template #reference>
                <div class="ppos-comp-rectangle"
                  v-if="ele2.type === 'ProcessPiece' || ele2.type === 'StartPiece' || ele2.type === 'EndPiece'">
                  {{ ele2.pieceId }}
                  <div class="ppos-comp-rectangle-btn" v-if="ele2.type !== 'EndPiece'"><button
                      @click="atomContext(ele2, 0)"></button></div>
                </div>
                <div></div>
              </template>
            </el-popover>
            <el-popover placement="right" title="原子服务推荐" :width="200" trigger="contextmenu">
              <div class="nscm-atom-drag-container">
                <div v-for="(service, surIndex) in ['是否纳入黑名单', '计算利息']" draggable="true" class="nscm-atom-drag"
                  :index="'' + (surIndex + 1)" :key="surIndex" @dragstart="atomStartAdd(service, $event)">
                  {{ service }}
                </div>
              </div>
              <template #reference>
                <div class="ppos-comp-rhombus" v-if="ele2.type === 'DetectPiece'">
                  <span>{{ ele2.pieceId }}</span>
                  <div class="ppos-comp-rhombus-shape"></div>
                  <div class="ppos-comp-rhombus-btn-left"><button @click="atomContext(ele2, 1)"></button></div>
                  <div class="ppos-comp-rhombus-btn-bottom"><button @click="atomContext(ele2, 0)"></button></div>
                </div>
                <div></div>
              </template>
            </el-popover>
            <div v-on:dragenter="ondragenter" v-on:drop="atomAddBtw(ele2, $event)" v-on:dragover="allowDrop">
              <div class="ppos-comp-arrowToDown"
                v-if="ele2.type === 'ProcessPiece' || ele2.type === 'StartPiece' || ele2.type === 'DetectPiece'"></div>
              <div class="ppos-comp-arrowCrossDown" v-if="ele2.pieceType === 'judgement'"></div>
              <div class="ppos-comp-arrowToLeft" v-if="ele2.type === 'etectPiece'">
                <div class="child1"></div>
                <div class="child2"></div>
              </div>
              <div class="ppos-comp-arrowCrossLeft" v-if="ele2.type === 'DetectPiece'">
                <div class="child1"></div>
                <div class="child2-1" v-if="step === 2"></div>
                <div class="child2-2" v-else></div>
                <div class="child3-1" v-if="step === 2"></div>
                <div class="child3-2" v-else></div>
              </div>
              <div class="ppos-comp-arrowToRight"></div>
            </div>
          </div>
        </div>

        <!-- <div
          class="ppos-arrow"
          v-on:dragenter="ondragenter"
          v-on:drop="faceDrop"
          v-on:dragover="allowDrop"
        ></div>
        <div class="ppos-comp">END OF SYS</div>-->
      </div>
    </div>
    <p-p-o-s-context :dialogVisible="dialogVisible" @closeDialog="dialogVisible = false"
      :currentAtom="currentAtom.value">
    </p-p-o-s-context>
  </div>
</template>  

<style lang='scss' scoped>
.ppos-main {
  display: table;
  height: calc(100% - 10px);
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  text-align: center;
  // background: #58a;
  background: #2581eb5f;
  background-position: center;
  background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;

  .ppos-container {
    height: 100%;
    width: 100%;
    display: table-cell;
    vertical-align: middle;

    .ppos-main-view {
      margin-top: 50px;
      margin-bottom: 50px;
      display: inline-block;

      .ppos-level {
        margin-bottom: 10px;

        .ppos-comp {
          display: inline-block;
          width: 160px;
          height: 80px;
          margin: 20px;
          position: relative;

          .ppos-comp-rectangle {
            background-color: white;
            border-radius: 6px;
            line-height: 80px;

            .ppos-comp-rectangle-btn {
              width: 0px;
              height: 0px;
              position: absolute;
              bottom: 50px;
              z-index: 100;
              left: 71px;

              button {
                height: 15px;
                width: 15px;
                border-radius: 50%;
                border: 0.5px solid rgb(161, 161, 161);
              }
            }
          }

          .ppos-comp-rhombus {
            position: relative;
            margin-top: 20px;

            span {
              position: absolute;
              z-index: 100;
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              line-height: 55px;
            }

            .ppos-comp-rhombus-shape {
              width: 0px;
              height: 0px;
              position: absolute;
              left: -20px;
              top: -25px;
              border: 100px solid transparent;
              border-top-width: 0px;
              border-bottom: 55px solid #ffffff;
              position: relative;
            }

            .ppos-comp-rhombus-shape::before {
              content: "";
              position: absolute;
              width: 0px;
              height: 0px;
              border: 100px solid transparent;
              border-bottom-width: 0px;
              border-top: 55px solid #ffffff;
              left: -100px;
              top: 55px;
            }

            .ppos-comp-rhombus-btn-left {
              width: 0px;
              height: 0px;
              position: absolute;
              bottom: 43px;
              z-index: 100;
              left: -15px;

              button {
                height: 15px;
                width: 15px;
                border-radius: 50%;
                border: 0.5px solid rgb(161, 161, 161);
              }
            }

            .ppos-comp-rhombus-btn-bottom {
              width: 0px;
              height: 0px;
              position: absolute;
              bottom: -8px;
              z-index: 100;
              left: 71px;

              button {
                height: 15px;
                width: 15px;
                border-radius: 50%;
                border: 0.5px solid rgb(161, 161, 161);
              }
            }
          }

          .ppos-comp-arrowToDown {
            position: absolute;
            width: 7px;
            height: 45px;
            background-color: #ffffff;
            top: 80px;
            left: 75px;
          }

          .ppos-comp-arrowToDown::after {
            content: "";
            position: absolute;
            top: 40px;
            left: -3.6px;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 12px solid #ffffff;
          }

          .ppos-comp-arrowCrossDown {
            position: absolute;
            width: 7px;
            height: 180px;
            background-color: #ffffff;
            top: 80px;
            left: 75px;
          }

          .ppos-comp-arrowCrossDown::after {
            content: "";
            position: absolute;
            top: 175px;
            left: -3.6px;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 12px solid #ffffff;
          }

          .ppos-comp-arrowToLeft {
            .child1 {
              position: absolute;
              height: 7px;
              width: 40px;
              top: 50px;
              left: -50px;
              background-color: #ffffff;
            }

            .child2 {
              position: absolute;
              width: 7px;
              height: 80px;
              top: 50px;
              left: -50px;
              background-color: #ffffff;
            }

            .child2::after {
              content: "";
              position: absolute;
              top: 77px;
              left: -3.6px;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-top: 12px solid #ffffff;
            }
          }

          .ppos-comp-arrowCrossLeft {
            .child1 {
              position: absolute;
              height: 7px;
              width: 40px;
              top: 47px;
              left: -50px;
              background-color: #ffffff;
            }

            .child2-1 {
              position: absolute;
              width: 7px;
              height: 135px;
              top: 50px;
              left: -50px;
              background-color: #ffffff;
            }

            .child3-1 {
              position: absolute;
              height: 7px;
              width: 40px;
              top: 180px;
              left: -50px;
              background-color: #ffffff;
            }

            .child3-1::after {
              content: "";
              position: absolute;
              top: -3px;
              left: 36px;
              border-bottom: 7px solid transparent;
              border-top: 7px solid transparent;
              border-left: 12px solid #ffffff;
            }

            .child2-2 {
              position: absolute;
              width: 7px;
              height: 250px;
              top: 50px;
              left: -50px;
              background-color: #ffffff;
            }

            .child3-2 {
              position: absolute;
              height: 7px;
              width: 40px;
              top: 300px;
              left: -50px;
              background-color: #ffffff;
            }

            .child3-2::after {
              content: "";
              position: absolute;
              top: -3px;
              left: 36px;
              border-bottom: 7px solid transparent;
              border-top: 7px solid transparent;
              border-left: 12px solid #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
  