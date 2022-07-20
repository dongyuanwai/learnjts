/**
 * @descript 洗牌算法打乱数组
 * 
 * @param {*} arr 数组
 * @returns 返回一个乱序的数组
 */
const shuffle = (arr) => {
    var result = [],
        random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}

export default shuffle