# 每周总结可以写在这里
## 重学 JavaScript | 编程语言通识与JavaScript语言设计
### 笔记
#### 语言按语法分类
  - 非形式语言
    - 中文，英文
  - 形式语言（乔姆斯基谱系）
    - 0型 无限制文法
    - 1型 上下文相关文法
    - 2型 上下文无关文法
    - 3型 正则文法
#### 形式语言产生式
  - BNF
小任务：
计算机语言分类：
c/c++/php/java/Ruby/go/汇编语言/Python
#### 图灵完备性
在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。
  - 命令式 -- 图灵机
    - go
    - if/while
  - 声明式 -- lambda
    - 递归
#### 类型系统
  - 静态与动态
  - 强类型弱类型
  - 复合类型
  - 子类型
    - 逆变/协变

终结符：它们能在一个形式语法的推导规则的输入或输出字符串存在，并且不能被分解成更小的单位
元编程：自相关性编程
例如：编程甲可以输出 A - Z，那么写程序甲算「编程」。而编程乙能生成编程甲，那么写程序乙算「元编程」。
### 总结
## 重学 JavaScript | 词法，类型
### 笔记
读js标准<br />unicode:<br />参考网址：[https://www.fileformat.info/info/unicode/](https://www.fileformat.info/info/unicode/)<br />通过unicode判断中文<br />**`codePointAt()`** 方法返回 一个 Unicode 编码点值的非负整数<br />
<br />InputElement

- whiteSpace // 空格
  - tab
  - vt // 纵向制表符
  - ff
  - sp
  - nbsp // &nbsp;不会断开的空格 java Script可能会换行。java&nbspScript不断
  - zwnbsp // 零宽空格|BOM（Bit order mask）可以用来判断文件的格式，默认加在文件的名称前面
  - <br />
- LineTerminator // 换行
  - lf
  - cr
  - ls
  - ps
- Comment // 注释
- Token // 有效的东西
  - Punctuator
  - Literal
    - Number
    - String
    - Boolean
    - Null
    - Undefined
    - Symbol
    - Object
  - IdentifierName
    - Identifier
      - 变量名（不可使用保留字）
      - 属性名
    - KeyWords
    - Future reserved KeyWords
### 总结