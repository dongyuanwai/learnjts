
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
  expect(deepClone({a:1,b:{c:100},e:Symbol(100)})).toEqual({a:1,b:{c:100},e:Symbol(100)})
})