/*
 * @Author: your name
 * @Date: 2022-05-03 23:00:44
 * @LastEditTime: 2022-05-03 23:10:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learnjts\test\deepClone.test.js
 */
/*
 * @Author: your name
 * @Date: 2022-05-03 22:28:43
 * @LastEditTime: 2022-05-03 22:30:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learnjts\test\deepClone.test.js
 */
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
import deepClone from '../src/deepClone'

test('对象',()=>{
    expect(deepClone({a:{b:10}})).toStrictEqual({a:{b:10}})
})

test('数字',()=>{
  expect(deepClone(100)).toStrictEqual(100)
})

test('全都有',()=>{
  expect(deepClone({a:1,b:{c:100},e:Symbol(100),f:2022-10-2})).toStrictEqual({a:1,b:{c:100},e:Symbol(100),f:2022-10-02})
})