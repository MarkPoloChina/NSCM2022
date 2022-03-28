import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      count: 1,
      test_json: {
        "pieceMap": {
          "pieceId6": {
            "nextPieces": [],
            "pieceId": "pieceId6",
            "pieceType": "execute",
            "serviceId": "F"
          },
          "pieceId5": {
            "nextPieces": [
              {
                "direct": true,
                "nextPieceId": "pieceId6"
              }
            ],
            "pieceId": "pieceId5",
            "pieceType": "execute",
            "serviceId": "E"
          },
          "pieceId2": {
            "nextPieces": [
              {
                "direct": true,
                "nextPieceId": "pieceId3"
              }
            ],
            "pieceId": "pieceId2",
            "pieceType": "execute",
            "serviceId": "B"
          },
          "pieceId1": {
            "nextPieces": [
              {
                "direct": true,
                "nextPieceId": "pieceId2"
              }
            ],
            "pieceId": "pieceId1",
            "pieceType": "execute",
            "serviceId": "A"
          },
          "pieceId4": {
            "nextPieces": [
              {
                "direct": true,
                "nextPieceId": "pieceId6"
              }
            ],
            "pieceId": "pieceId4",
            "pieceType": "execute",
            "serviceId": "D"
          },
          "pieceId3": {
            "nextPieces": [
              {
                "constant": 2.3,
                "direct": false,
                "nextPieceId": "pieceId4",
                "operation": "LESS",
                "variable": "meney"
              },
              {
                "constant": 10,
                "direct": false,
                "nextPieceId": "pieceId5",
                "operation": "GREATER",
                "variable": "count"
              },
              {
                "constant": false,
                "direct": false,
                "nextPieceId": "pieceId6",
                "operation": "EQUALS",
                "variable": "isRight"
              }
            ],
            "pieceId": "pieceId3",
            "pieceType": "judgement",
            "serviceId": "C"
          }
        },
        "startPieceId": "pieceId1"
      }
    }
  },
  getters: {
    test_getCount(state) {
      return state.count
    },
    test_getJson(state) {
      return state.test_json
    }
  },
  mutations: {
    test_increment(state) {
      state.count++
    },
    test_setCount(state, num) {
      state.count = num
    }
  }
})

export default store