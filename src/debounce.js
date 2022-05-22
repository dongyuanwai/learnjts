/**
 * 
 * @param {*} funName 传入的函数名
 * @param {*} delay 多少s后执行
 * @returns 返回一个函数，需要用一个变量接收，然后调用
 */
function debounce(funName, delay) {
    return function (args) {
        let that = this
        let _args = args
        clearTimeout(funName.id)
        funName.id = setTimeout(function () {
            funName.call(that, _args)
        }, delay)
    }
}

export default debounce