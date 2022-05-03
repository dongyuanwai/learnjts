/**
 * @description: 
 * @param {*}
 * @return {*}
 */

const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)
const deepClone = function (obj, hash = new WeakMap()) {
    if(typeof obj !== 'object') return obj
    // 日期对象直接返回一个新的日期对象
    if (obj.constructor === Date) return new Date(obj)
    //正则对象直接返回一个新的正则对象   
    if (obj.constructor === RegExp) return new RegExp(obj)
    //如果循环引用了就用 weakMap 来解决
    if (hash.has(obj)) return hash.get(obj)
    let allDesc = Object.getOwnPropertyDescriptors(obj)
    //遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
    //继承原型链
    hash.set(obj, cloneObj)
    for (let key of Reflect.ownKeys(obj)) { 
        cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key]
    }
    return cloneObj
}

export default deepClone