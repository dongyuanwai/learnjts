/*
 * @Author: yuanwai
 * @Date: 2022-04-28 22:35:16
 * @LastEditors: yuanwai
 * @LastEditTime: 2022-05-01 20:39:08
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
console.log("====",obj,deepClone(obj))

export {
    getDataType,
    deepClone
}
  