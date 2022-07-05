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






