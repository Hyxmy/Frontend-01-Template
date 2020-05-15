# 每周总结可以写在这里

## 重学 JavaScript | 结构化（二）

### 笔记

#### js的执行粒度

- Js  context => realm。js context（上下文）包含一个globel
- 宏任务
- 微任务（Promise）
- 函数调用：执行上下文切换，使用栈，进栈出栈
- 语句/声明
- 表达式
- 直接量/变量/this

#### 函数调用

LexicalEnvironment（词法环境）

- this
- New.target
- super
- 变量

闭包

code + Environment Record

因为es6后增加了箭头函数Environment Record需要增加this的存储

执行上下文

javaScript把一段代码（包括函数）执行时所需要的信息定义为“执行上下文”

es3中的执行上下文包括三个部分

- Scope：作用域，也被叫做作用域链
- Variable object：变量对象，用于存储变量的对象
- This value：this的值

Es5改进了命名方式

- Lexical environment：词法环境，当获取变量时使用
- Variable environment：变量环境，当声明变量时使用
- This value

Es2018

- Lexical environment：词法环境，当获取变量或this值时使用
- Variable environment：变量环境，当声明变量时使用
- code evaluation state：用于恢复代码执行位置
- Function：执行的任务是函数时使用，表示正在被执行的函数
- ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码
- Realm：使用的基础库和内置对象实例
- Generator：仅生成器上下文有这个属性，表示当前生成器

//不需要使用realm，直接从lexicalEnvironment里取Array变量

new Arrray();



为什么不推荐使用with，因为with内的var定义既会作用在with里，又会作用到with外面的函数

```js
var b;
void function(){
    var env = {b:1};
    b = 2;
    console.log("In function b:", b);
    with(env) {
        var b = 3; // 会影响到with内和外面函数的b
        console.log("In with b:", b);
    }
}();
console.log("Global b:", b);
```





### 小结



## 浏览器工作原理 | HTTP协议+语法与词法分析（一）

### 笔记

### 小结

## 浏览器工作原理 | HTTP协议+语法与词法分析（二）

### 笔记

### http

请求头

```
POST / HTTP/1.1
Host: 127.0.0.1
Content-Type: application/x-www-form-urlencoded

field=123
```

组装request(对象=》字符串)

解析responce（字符串 =〉 对象）

流式获取，使用状态机

状态机：

if else实现

把状态封成函数

### 小结



