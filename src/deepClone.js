/**
 * @description: 深度克隆
 * @param {*} 传入要克隆的对象
 * @return {*} 返回一个深拷贝新的对象
 */

 const isComplexDataType = (target) => (typeof target === 'object' || typeof target === 'function') && (target !== null)
 const deepClone = function (target, hash = new WeakMap()) {
     // 不是复杂数据类型类型直接返回
     if(!isComplexDataType(target)) return target
     // 日期对象直接返回一个新的日期对象
     if (target.constructor === Date) return new Date(target)
     // 正则对象直接返回一个新的正则对象
     if (target.constructor === RegExp) return new RegExp(target)     
     // 如果循环引用了就用 weakMap 来解决
     if (hash.has(target)) return hash.get( )
     // 获取目标元素的所有自身属性
     let allDesc = Object.getOwnPropertyDescriptors(target)
     // 遍历传入参数所有键的特性
     let cloneTarget = Object.create(Object.getPrototypeOf(target), allDesc)
     //继承原型链
     hash.set(target, cloneTarget)
     for (let key of Reflect.ownKeys(target)) { 
         cloneTarget[key] = (isComplexDataType(target[key]) && typeof target[key] !== 'function') ? deepClone(target[key], hash) : target[key]
     }
     return cloneTarget
 }
export default deepClone