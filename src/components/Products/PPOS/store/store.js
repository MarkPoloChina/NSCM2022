import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      count: 1,
      test_json: {
        "pieceMap": {
          "Det-01": {
            "type": "DetectPiece",
            "pieceId": "是否符合地域限制",
            "pieceKind": "DETECT",
            "serviceId": "Ser-04",
            "next": [
              {
                "type": "DetectLogic",
                "operand1": {
                  "operandKind": "SERVICE_CUSTOM",
                  "operandType": "Boolean",
                  "operandName": "opr-01",
                  "operandValue": null,
                  "num": 1,
                  "remark": null
                },
                "operand2": {
                  "operandKind": "CONSTANT",
                  "operandType": "Boolean",
                  "operandName": null,
                  "operandValue": true,
                  "num": 1,
                  "remark": null
                },
                "operations": "EQUALS",
                "nextId": "Pro-02",
                "logicKind": "DETECT"
              },
              {
                "type": "DetectLogic",
                "operand1": {
                  "operandKind": "SERVICE_CUSTOM",
                  "operandType": "Boolean",
                  "operandName": "opr-01",
                  "operandValue": null,
                  "num": 1,
                  "remark": null
                },
                "operand2": {
                  "operandKind": "CONSTANT",
                  "operandType": "Boolean",
                  "operandName": null,
                  "operandValue": false,
                  "num": 1,
                  "remark": null
                },
                "operations": "EQUALS",
                "nextId": "Pro-03",
                "logicKind": "DETECT"
              }
            ]
          },
          "start": {
            "type": "StartPiece",
            "pieceId": "开始",
            "pieceKind": "START",
            "nextId": "Pro-01"
          },
          "end": {
            "type": "EndPiece",
            "pieceId": "结束",
            "pieceKind": "END"
          },
          "Pro-01": {
            "type": "ProcessPiece",
            "pieceId": "锁定库存",
            "pieceKind": "PROCESS",
            "serviceId": "Ser-01",
            "nextId": "Det-01"
          },
          "Pro-03": {
            "type": "ProcessPiece",
            "pieceId": "写入日志",
            "pieceKind": "PROCESS",
            "serviceId": "Ser-03",
            "nextId": "end"
          },
          "Pro-02": {
            "type": "ProcessPiece",
            "pieceId": "执行购买",
            "pieceKind": "PROCESS",
            "serviceId": "Ser-02",
            "nextId": "Pro-03"
          }
        },
        "productId": null,
        "productVersion": null
      },
      test_json2: {
        "pieceMap": {
          "Det-01": {
            "type": "DetectPiece",
            "pieceId": "检查入口参数合法",
            "pieceKind": "DETECT",
            "serviceId": "Ser-04",
            "next": [
              {
                "type": "DetectLogic",
                "operand1": {
                  "operandKind": "SERVICE_CUSTOM",
                  "operandType": "Boolean",
                  "operandName": "opr-01",
                  "operandValue": null,
                  "num": 1,
                  "remark": null
                },
                "operand2": {
                  "operandKind": "CONSTANT",
                  "operandType": "Boolean",
                  "operandName": null,
                  "operandValue": true,
                  "num": 1,
                  "remark": null
                },
                "operations": "EQUALS",
                "nextId": "Pro-02",
                "logicKind": "DETECT"
              },
              {
                "type": "DetectLogic",
                "operand1": {
                  "operandKind": "SERVICE_CUSTOM",
                  "operandType": "Boolean",
                  "operandName": "opr-01",
                  "operandValue": null,
                  "num": 1,
                  "remark": null
                },
                "operand2": {
                  "operandKind": "CONSTANT",
                  "operandType": "Boolean",
                  "operandName": null,
                  "operandValue": false,
                  "num": 1,
                  "remark": null
                },
                "operations": "EQUALS",
                "nextId": "Pro-03",
                "logicKind": "DETECT"
              }
            ]
          },
          "start": {
            "type": "StartPiece",
            "pieceId": "开始",
            "pieceKind": "START",
            "nextId": "Det-01"
          },
          "end": {
            "type": "EndPiece",
            "pieceId": "结束",
            "pieceKind": "END"
          },
          "Pro-03": {
            "type": "ProcessPiece",
            "pieceId": "返回结果",
            "pieceKind": "PROCESS",
            "serviceId": "Ser-03",
            "nextId": "end"
          },
          "Pro-02": {
            "type": "ProcessPiece",
            "pieceId": "查询用户属性",
            "pieceKind": "PROCESS",
            "serviceId": "Ser-02",
            "nextId": "Pro-03"
          }
        },
        "productId": null,
        "productVersion": null
      },
      testAtom: [
        {
          "serviceClass": "计算类",
          "serviceDivisions": [
            {
              "serviceDivision": "数值计算类",
              "services": [
                '返回数组长度',
                '返回最大值'
              ]
            },
            {
              "serviceDivision": "时间计算类",
              "services": [
                {
                  "serviceId": "10000004"
                }
              ]
            }
          ]
        },
        {
          "serviceClass": "判断类",
          "serviceDivisions": [
            {
              "serviceDivision": "用户信息判断类",
              "services": [
                {
                  "serviceId": "10000011"
                },
                {
                  "serviceId": "10000012"
                },
                {
                  "serviceId": "10000013"
                },
                {
                  "serviceId": "10000009"
                }
              ]
            },
            {
              "serviceDivision": "存款交易判断类",
              "services": [
                {
                  "serviceId": "10000007"
                }
              ]
            }
          ]
        },
        {
          "serviceClass": "控制类",
          "serviceDivisions": [
            {
              "serviceDivision": "产品控制类",
              "services": [
                {
                  "serviceId": "10000014"
                },
                {
                  "serviceId": "10000015"
                },
                {
                  "serviceId": "10000016"
                },
                {
                  "serviceId": "22511768"
                }
              ]
            },
            {
              "serviceDivision": "用户信息判断类",
              "services": [
                {
                  "serviceId": "10000010"
                }
              ]
            },
            {
              "serviceDivision": "系统控制类",
              "services": [
                {
                  "serviceId": "10000017"
                }
              ]
            },
            {
              "serviceDivision": "购买控制类",
              "services": [
                {
                  "serviceId": "44583946"
                }
              ]
            }
          ]
        }
      ],
      test_atoms: [
        {
          "serviceId": "10000001",
          "serviceName": "计算本金和服务",
          "serviceClass": "计算类",
          "serviceDivision": "数值计算类",
          "serviceDescription": "该原子服务用于计算本金和",
          "serviceIn": {
            "userId": "String"
          },
          "serviceOut": {
            "principal": "BigDecimal"
          },
          "serviceVersion": "20220128s",
          "serviceDeploy": null,
          "isAvailable": true,
          "requestMethod": "GET"
        },
        {
          "serviceId": "10000002",
          "serviceName": "计算昨日收益服务",
          "serviceClass": "计算类",
          "serviceDivision": "数值计算类",
          "serviceDescription": "该原子服务用于计算昨日收益",
          "serviceIn": {
            "userId": "String"
          },
          "serviceOut": {
            "interest_yesterday": "BigDecimal"
          },
          "serviceVersion": "20220128s",
          "serviceDeploy": null,
          "isAvailable": true,
          "requestMethod": "GET"
        },
        {
          "serviceId": "10000003",
          "serviceName": "计算总收益服务",
          "serviceClass": "计算类",
          "serviceDivision": "数值计算类",
          "serviceDescription": "这个原子服务用于计算总收益",
          "serviceIn": {
            "userId": "String"
          },
          "serviceOut": {
            "interest_sum": "BigDecimal"
          },
          "serviceVersion": "20220128s",
          "serviceDeploy": null,
          "isAvailable": true,
          "requestMethod": "GET"
        }

      ],
      test_effect: [
        {
          "pieceMap": {
            "start": {
              "type": "StartPiece",
              "pieceId": "开始",
              "pieceKind": "START",
              "nextId": "end"
            },
            "end": {
              "type": "EndPiece",
              "pieceId": "结束",
              "pieceKind": "END"
            }
          },
          "productId": null,
          "productVersion": null
        },
        {
          "pieceMap": {
            "D-1": {
              "type": "ProcessPiece",
              "pieceId": "库存锁定",
              "pieceKind": "START",
              "nextId": "end"
            },
            "start": {
              "type": "StartPiece",
              "pieceId": "开始",
              "pieceKind": "START",
              "nextId": "D-1"
            },
            "end": {
              "type": "EndPiece",
              "pieceId": "结束",
              "pieceKind": "END"
            }
          },
          "productId": null,
          "productVersion": null
        },
        {
          "pieceMap": {
            "D-1": {
              "type": "ProcessPiece",
              "pieceId": "库存锁定",
              "pieceKind": "START",
              "nextId": "Det-01"
            },
            "Det-01": {
              "type": "DetectPiece",
              "pieceId": "证件审查",
              "pieceKind": "DETECT",
              "serviceId": "Ser-04",
              "next": [
                {
                  "type": "DetectLogic",
                  "operand1": {
                    "operandKind": "SERVICE_CUSTOM",
                    "operandType": "Boolean",
                    "operandName": "opr-01",
                    "operandValue": null,
                    "num": 1,
                    "remark": null
                  },
                  "operand2": {
                    "operandKind": "CONSTANT",
                    "operandType": "Boolean",
                    "operandName": null,
                    "operandValue": true,
                    "num": 1,
                    "remark": null
                  },
                  "operations": "EQUALS",
                  "nextId": "end",
                  "logicKind": "DETECT"
                },
                {
                  "type": "DetectLogic",
                  "operand1": {
                    "operandKind": "SERVICE_CUSTOM",
                    "operandType": "Boolean",
                    "operandName": "opr-01",
                    "operandValue": null,
                    "num": 1,
                    "remark": null
                  },
                  "operand2": {
                    "operandKind": "CONSTANT",
                    "operandType": "Boolean",
                    "operandName": null,
                    "operandValue": false,
                    "num": 1,
                    "remark": null
                  },
                  "operations": "EQUALS",
                  "nextId": "end",
                  "logicKind": "DETECT"
                }
              ]
            },
            "start": {
              "type": "StartPiece",
              "pieceId": "开始",
              "pieceKind": "START",
              "nextId": "D-1"
            },
            "end": {
              "type": "EndPiece",
              "pieceId": "结束",
              "pieceKind": "END"
            }
          },
          "productId": null,
          "productVersion": null
        },
        {
          "pieceMap": {
            "D-2": {
              "type": "ProcessPiece",
              "pieceId": "执行购买",
              "pieceKind": "PROCESS",
              "nextId": "end"
            },
            "D-1": {
              "type": "ProcessPiece",
              "pieceId": "库存锁定",
              "pieceKind": "PROCESS",
              "nextId": "Det-01"
            },
            "Det-01": {
              "type": "DetectPiece",
              "pieceId": "证件审查",
              "pieceKind": "DETECT",
              "serviceId": "Ser-04",
              "next": [
                {
                  "type": "DetectLogic",
                  "operand1": {
                    "operandKind": "SERVICE_CUSTOM",
                    "operandType": "Boolean",
                    "operandName": "opr-01",
                    "operandValue": null,
                    "num": 1,
                    "remark": null
                  },
                  "operand2": {
                    "operandKind": "CONSTANT",
                    "operandType": "Boolean",
                    "operandName": null,
                    "operandValue": true,
                    "num": 1,
                    "remark": null
                  },
                  "operations": "EQUALS",
                  "nextId": "D-2",
                  "logicKind": "DETECT"
                },
                {
                  "type": "DetectLogic",
                  "operand1": {
                    "operandKind": "SERVICE_CUSTOM",
                    "operandType": "Boolean",
                    "operandName": "opr-01",
                    "operandValue": null,
                    "num": 1,
                    "remark": null
                  },
                  "operand2": {
                    "operandKind": "CONSTANT",
                    "operandType": "Boolean",
                    "operandName": null,
                    "operandValue": false,
                    "num": 1,
                    "remark": null
                  },
                  "operations": "EQUALS",
                  "nextId": "end",
                  "logicKind": "DETECT"
                }
              ]
            },
            "start": {
              "type": "StartPiece",
              "pieceId": "开始",
              "pieceKind": "START",
              "nextId": "D-1"
            },
            "end": {
              "type": "EndPiece",
              "pieceId": "结束",
              "pieceKind": "END"
            }
          },
          "productId": null,
          "productVersion": null
        }
      ]
    }
  },
  getters: {
    test_getCount(state) {
      return state.count
    },
    test_getJson(state) {
      return state.test_json
    },
    test_getAtom(state) {
      return state.testAtom
    },
    test_getJson2(state) {
      return state.test_json2
    },
    test_tree2(state) {
      return state.test_atoms
    },
    test_getStep(state) {
      return state.test_effect
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