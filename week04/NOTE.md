# 每周总结可以写在这里

## 重学 JavaScript | 结构化（一）

### 笔记

概念：事件队列，宏任务，微任务

#### 宏任务

setTimeout/setInterval:是浏览器实现的，所以是宏任务

#### 微任务

微任务保存在js引擎内

微任务只有promise

同步代码也是微任务

js代码都在微任务执行的

promise会产生额外的微任务，生成的微任务会进入微任务队列的尾部

同步代码：在同一个微任务内执行的代码

同步异步是相对而言的

Promise + async的执行

async函数内的代码，在没有遇到await之前的都是同步代码（包括await的代码），await执行完之后，await之后的代码会变成一个微任务，可以理解为await之后的代码是一个新的then（这边需要注意微任务入队的时机是await执行完了以后）。

Async 函数就是利用了promise。然后await是等待一个promise状态改变，改变之后才可以执行后面的代码，这一点和then的表现是一样的。

```js
// 中括号内的是打印顺序
console.log('start'); // 【1】第一个微任务内执行
setTimeout(()=> {
  console.log('1'); // 【12】宏任务，进入宏任务队列
});
async function foo() {
  console.log('6'); // 【4】第一个微任务内执行
  await foo1();
  console.log('7'); // 【10】第五个微任务内执行
  await 5;
  console.log('8'); // 【11】第六个微任务内执行
}
async function foo1() {
  console.log('9'); // 【5】第一个微任务内执行
  await 1;
  console.log('10'); // 【8】第三个微任务
}
new Promise(res => {
  console.log('2'); // 【2】第一个微任务内执行
  res();
  console.log('3'); // 【3】第一个微任务内执行
}).then(() => {
  console.log('4'); // 【7】第二个微任务内执行
}).then(() => {
  console.log('5'); // 【9】第四个微任务内执行
});
foo();
console.log('end'); // 【6】第一个微任务内执行

```

### 小结

上了这堂课之后对浏览器的事件循环中的队列有了新的认识，所有代码都是在微任务内执行的，现在了解的微任务比以前以为的微任务更加广泛了。

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