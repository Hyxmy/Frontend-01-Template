# 每周总结可以写在这里
## 表达式，类型转换
### 笔记
#### Expressions
##### Member
##### Call
左结合和右结合
操作符
一元操作符
- delete a.b
- void foo()
- typeof a
- +a
- -a
- ~a
- !a
- await a
多元操作符
- exponental(指数的)
  - ** 
- multiplicative(可乘的)
  - *，/，%
- additive(可加的)
  - +，-
- Shift(转移)
  - <<
- relationship(关系)
  - <, >, <=, >=, instanceof
- Equality(相等)
- Bitwise(位运算)
- logical(逻辑运算)
- conditionl(条件运行)

##### 类型转换
对象转为原始值：如果有Symbol.toPrimitive()方法（必须返回原始值，否则报错），优先调用在返回；没有的话调用valueOf；然后是toSring。
```js
const a = {
  [Symbol.toPrimitive]() {
    return 4;
  },
  toString() {},
  valueOf() {}
};
console.log(+a); // 4
```
### 小结
从语法和运行时的角度去分析
## 语句，对象
### 笔记
- 语法
  - 简单语句
    - ExpressionStatement
    - EmptyStatement
    - DebuggerStatement(不产生作用，用于调试)
    - ThrowStatement
    - ContinueStatement
    - BreakStatement
    - ReturnStatement
  - 组合语句
    - BlockStatement
    - IfStatement
    - SwitchStatement
    - IterationStatement
      - while() {}
      ```js
      let b = 3;
      while(b > 0) {
        b--;
        break; // 跳出while循环。continue;会退出当前循环
        console.log(b);
      }
      ```
      while会消费break;continue;等语句。
      消费：在这里的意思时会对这些语句作出处理。（比如跳出while循环/退出当前循环）
      - do{} while()
      - for( ; ; )
      ```js
      // for也会产生一个作用域，作用于for后跟着的括号内的表达式。
      // for会把i传入后面跟着的块级作用域，但是在块级作用域内还是可以定义i变量。所以这边应该是多加了一层作用域来存放变量i
      for (let i = 0; i < 3; i++) {
        console.log(i); // 读取的外面的i
      }
      ```
      - for( in )
      循环对象的所有的属性
      - for ( of )
      循环所有能够迭代的东西（Iterator）。语法糖
      - for await(of)【暂时不讲，等到讲promise再展开来讲】
    - WithStatement
    - LabelledStatement
    - TryStatement
  - 声明
    - functionDeclaration
    - GeneratorDeclaration
    - AsyncFunctionDeclaration
    - AsyncGeneratorDeclaration
    - varibleStatement
    - ClassDeclaration
    - LxicalDeclaration
- 运行时(运行时会用到的内部的类型)
  - Completion Record
  - Lexical Enviorment


#### 面向对象
在面向对象里，两个对象绝对不相等
行为改变状态
对象三要素：
- 唯一性
- 状态
- 行为
架构层面：封装，解耦，复用，内聚

继承：面向对象的一个子系统

多态：动态性的程度（写同一段代码，表现的行为不一致）

基于对象/面向对象

作用域和上下文的区别：

作用域指的是源代码里的文本范围

上下文指的是在用户的电脑上，内存里面存把变量的地方

generator和异步没有关系

##### 基于类的面向对象
使用分类的思想

需要把两个分支里的类抽象到一起去，需要使用interface
##### 基于原型的面向对象
更接近人类的原始认知，不做严谨的分类，而是采用“相似”这样的方法去描述

需要new的都使用class

[[]]用来标识非正常属性
### 小结
不是单纯的去记一个概念，需要了解到它会对你产生怎样的影响
