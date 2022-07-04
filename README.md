
# 目的
Learnjts是一个JavaScript实用工具库，里面有各种常用的工具方法

Learnjts 是我在进行真实项目时，常用到的一些工具方法；并且为了加深学习js知识而总结产生的,在项目里我写了大量的注释以及实现的思想和步骤

所以你不仅可以将learnjts引入到你的项目中，还可以借助此文档来学习js

# 安装

```js
npm install learnjts
```

# 使用

```js
// 首先先引入需要的方法名
import getDataType from 'learnjts';

//再直接调用
getDataType(100) //会返回 number
```

# 已有方法和计划

1. getDataType 获取传入变量的数据类型 （已完成）
2. capitalNum  阿拉伯数字转化为中文对应数字 （已完成）
3. deepClone   深度克隆 （已完成未测试）
4. debounce    防抖
5. throttle    节流