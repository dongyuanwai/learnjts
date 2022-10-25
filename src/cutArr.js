/**
*
* @param {array} arr 要分割的数组
* @param {number} parts 分割成几部分
* @returns 指定长度的新数组
*/
function cutArr(arr, parts = 1) {
    let index = 0 // 下标
    const size = Math.floor(arr.length / parts) || 1 // 每部分长度
    const result = [] // 结果
    while (index < parts - 1) {
        result.push(arr.slice(index * size, (index + 1) * size).join(''))
        index++
    }
    result.push(arr.slice(index * size).join(''))
    return result
}

export default cutArr