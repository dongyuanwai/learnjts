/**
 * 
 * @description 节流：控制流量，单位时间内事件只能触发一次。
 *                  节流可以比作过红绿灯，每等一个红灯时间就可以过一批。
 * 
 * @param {*} funName 传入的函数名
 * @param {*} wait 需要等待多少s后执行
 * @returns 返回一个函数，需要用一个变量接收，然后调用
 * 
 * 
 */
function throttle(funName,wait){
    let timer;
    return function(){
        let _this = this;
        let args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                timer = null
                funName.applay(_this,args)
            },wait)
        }
    }
}

export default throttle