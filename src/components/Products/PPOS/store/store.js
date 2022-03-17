import { createStore } from 'vuex'
const store = createStore({
  state () {
    return {
      count: 1
    }
  },
  getters:{
    test_getCount(state){
      return state.count
    }
  },
  mutations: {
    test_increment (state) {
      state.count++
    },
    test_setCount (state,num) {
        state.count = num
    }
  }
})
 
export default store