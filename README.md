
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

1. getDataType 获取传入变量的数据类型 
2. capitalNum  阿拉伯数字转化为中文对应数字 
3. deepClone   深度克隆 
4. debounce    防抖
5. throttle    节流

详细内容移步此文档[Learnjts文档](https://dongyuanwai.github.io/learnjtsdoc/)


## 提交规范

- feat：提交新功能
- fix：修复了bug
- docs：只修改了文档
- style：调整代码格式，未修改代码逻辑（比如修改空格、格式化、缺少分号等）
- refactor：代码重构，既没修复bug也没有添加新功能
- perf：性能优化，提高性能的代码更改
- test：添加或修改代码测试
- chore：对构建流程或辅助工具和依赖库（如文档生成等）的更改
