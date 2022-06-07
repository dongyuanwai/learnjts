/**
 * 
 * @description 防抖：防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。
 *                  代码实现重在清零 clearTimeout。防抖可以比作等电梯，只要有一个人进来，就需要再等一会儿。业务场景有避免登录按钮多次点击的重复提交。
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