/**
 * @description: 获取传入变量的数据类型
 * @param {*} target 传入的目标参数
 * @return {*} 返回数据类型的小写字符串
 */
function getDataType(target){
    let type = typeof target
    if(type === 'object'){
        return Object.prototype.toString.call(target).replace(/^\[object (\S+)\]$/, '$1').toLowerCase();
    }else{
        return type
    }
}

export default getDataType
