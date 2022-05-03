/*
 * @Author: yuanwai
 * @Date: 2022-04-28 22:35:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-03 22:57:13
 * @FilePath: \learnjts\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by , All Rights Reserved. 
 */

import getDataType from './src/getDataType.js'
import deepClone from './src/deepClone.js'

let obj = {
    a:{b:1},
    d:Symbol(100)
}
console.log("====",obj,deepClone(obj),deepClone(100))

export {
    getDataType,
    deepClone
}
  