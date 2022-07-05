# 工具方法详细教程

## 获取数据类型
`getDataType`用来获取传入参数的数据类型

### getDataType
使用方式：
传入一个参数，会返回数据类型的字符串

```js
// 引入
import {getDataType} from 'learnjts'

// 使用
getDataType(100) // 返回一个字符串 'number'
console.log(getDataType(100)) // number

let obj ={book:'js深入学习指南'}
console.log(getDataType(obj)) // object
```

### 详细解析
`getDataType`可以准确的判断出参数的数据类型。number、string、array、object等
#### 源码
```js
function getDataType(target){
    let type = typeof target
    // 判断是否是复杂数据类型，如果不是则直接返回
    if(type === 'object'){
        return Object.prototype.toString.call(target)
                .replace(/^\[object (\S+)\]$/, '$1').toLowerCase();
    }else{
        return type
    }
}
```
首先使用typeof判断参数是不是基础类型，如果是就直接返回，如果不是就是用 `Object.prototype.toString` 来获取数据类型
,toString()方法获取的数据类型都是有规律的，所以使用正则进行匹配，截取数据类型，最后以 小写字符串 的形式统一返回数据类型

#### 知识点
- `typeof `只能判断基础数据类型，并且当typeof判断null时返回一个object

- 而 `instanceof` 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。它可以判断复杂的引用数据类型，但是不能正确判断基础数据类型

- toString() 是 Object 的原型方法，调用该方法，可以统一返回格式为 “[object Xxx]” 的字符串，其中 Xxx 就是对象的类型。对于 Object 对象，直接调用 toString() 就能返回 [object Object]，而对于其他对象，则需要通过 call 来调用


## 数字转中文
### capitalNum
`capitalNum`用来将传入的阿拉伯数字转成中文数字，目前暂时只支持100一下的数字

使用方式：
```js
// 引入
import {capitalNum} from 'learnjts'

// 使用
capitalNum(1) // 一
console.log(capitalNum(1)) // 一

console.log(capitalNum(10)) // 十
console.log(capitalNum(16)) // 十六
console.log(capitalNum(20)) // 二十
console.log(capitalNum(22)) // 二十二
console.log(capitalNum(100)) // 一百
```

### 详细解析
做的项目中经常从后台返回的是数字序数，但是要求却是用中文做序数，所以写了这个函数

::: warning
不支持负数和小数,且只支持100以下的整数
:::
#### 源码
```js
function capitalNum(num){
    const capitalList = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    if(num < 0) {
        return "不支持负数"
    }else if(num >= 0 && num<=10){
        // 返回十以内的数字
        return capitalList[num]
    }else if(num > 10 && num < 100){
        // 十位数
        const decade = String(num)[0];
        // 个位数
        const single = String(num)[1];
        if(num < 20){
            return `十${capitalList[Number(single)]}`;
        }
        // 进行拼接，如果个位数为0 
        if(Number(single) === 0){
            return `${capitalList[Number(decade)]}十`;
        }else{
            // 个位数不为0
            return `${capitalList[Number(decade)]}十${capitalList[Number(single)]}`;
        }
    }else{
        return "不支持100及以上的数字"
    }
}
```




