module.exports = {
    "env": {
        "browser": true,
        "node":true,
        "es6": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
         /* 
            "off" -> 0 关闭规则
            "warn" -> 1 开启警告规则
            "error" -> 2 开启错误规则
        */
        "space-before-function-paren": 0,  // 函数定义时括号前面要不要有空格
        "semi": 0,  // 语句可以不需要分号结尾
        "eqeqeq": 2, // 必须使用全等
    }
}
