/**
 * 
 * @param {*} num 传入阿拉伯数字
 * @returns 返回中文的对应数字，仅支持100以内的数字
 */
function capitalNum(num){
    const capitalList = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    if(num < 0) {
        return "不支持负数"
    }else if(num >= 0 && num<=10){
        return capitalList[num]
    }else if(num > 10 && num < 100){
        const decade = String(num)[0];
        const single = String(num)[1];
        if(num < 20){
            return `十${capitalList[Number(single)]}`;
        }
        if(Number(single) === 0){
            return `${capitalList[Number(decade)]}十`;
        }else{
            return `${capitalList[Number(decade)]}十${capitalList[Number(single)]}`;
        }
    }else{
        return "不支持100及以上的数字"
    }
}

export default capitalNum