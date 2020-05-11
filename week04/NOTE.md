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

async函数内的代码，在没有遇到await之前的都是同步代码（包括await的代码），await之后的代码会变成一个微任务，可以理解为await之后的代码是一个新的then。

Async 函数就是利用了promise。然后await是等待一个promise状态改变，改变之后才可以执行后面的代码，这一点和then的表现是一样的。

```js
// 中括号内的是打印顺序
console.log('start'); // 【1】第一个微任务内执行
setTimeout(()=> {
  console.log('1'); // 【11】宏任务，进入宏任务队列
});
async function foo() {
  console.log('6'); // 【4】第一个微任务内执行
  await foo1();
  console.log('7'); // 【8】第三个微任务内执行
  await 5;
  console.log('8'); // 【10】第五个微任务内执行
}
async function foo1() {
  console.log('9'); // 【5】第一个微任务内执行
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

### 小结