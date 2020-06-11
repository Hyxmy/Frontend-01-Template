## 1. 重学CSS | CSS动画

### 笔记

#### 动画

Animation

##### 贝塞尔曲线

是一种插值曲线，它描述了两个点之间差值来形成连续的曲线形状的规则

贝塞尔曲线拟合：

理论上，贝塞尔曲线可以通过分段的方式拟合任意曲线，但是有一些特殊的曲线，是可以用贝塞尔曲线完美拟合的，比如抛物线。

#### 渲染与颜色

CMYK

C（青）M（品红）Y（蓝）K（黑色）

RGB

RGB（红绿蓝）

#### 形状

Data uri + svg

#### 作业

对css的属性进行分类（使用xmind来表现）

### 小结

## 2. 重学HTML | HTML语言与扩展

### 笔记

HTML的定义：XML和SGML

### 小结

## 3. 重学HTML | HTML语义

### 笔记

### 语义化标签

对于语义化标签的看法，用好>不用>滥用。

为什么要用语义化标签，主要就是让页面更好的被理解，更多的是帮机器理解。

比如ruby标签，是用来显示注释的。如果程序员熟悉这个标签，一看就知道rt里面的事注释，机器也能知道rt里面的是注释。但是如果我们是用span+css实现的，程序员需要看了html结构+css才知道，而机器根本就无从知道。

```html
// ruby标签需要配置rt标签使用，rt标签内的内容就是注释。rp标签用于当ruby不被支持时的显示
<ruby>
漢 <rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt>
</ruby>
```

- 让人更好的理解，通常指的程序员
  - 语义化标签会使页面结构看起来更清晰。
- 让机器更好理解
  - 根据文章能抽取出文章的目录
  - 比如一些帮助视障用户进行阅读
  - 比如搜索引擎进行搜索
  - 能补充一些单单是文本语言不能表达的东西，延伸语义。（也能帮程序员了解语义）

缺点：

1. 有些标签还不知道就已经过时了
2. 语义化标签一般都带默认样式，而一般我们都不需要这些样式，还需要先取消，再加样式
3. 很多东西不知道用什么标签

### head里能写哪些标签

除了有语义标签，还有元信息标签，比如head

head是元信息标签的容器

title是页面的title

base是给页面的所有url相对地址提供一个基础（最好不要使用）

meta是一组键值对，通用的元信息标签。比如`<meta name="charset" content="utf8" >`

- Charset，描述html文档自身的编码。html5之后有了简略写法。一般情况一下，http头会定义编码，但当使用file协议打开文档是charset就变的很重要了。

- Http-equive，表示执行了一个命令，不需要name属性了

  ```html
  // 相当于增加了content-type请求头，并且指定了编码方式
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  ```

  - content-language 指定内容的语言；
  - refresh 刷新；
  - set-cookie 模拟 http 头 set-cookie，设置 cookie；
  - x-ua-compatible 模拟 http 头 
  - x-ua-compatible，声明 ua 兼容性；
  - content-security-policy 模拟 http 头
  - content-security-policy，声明内容安全策略。

- name为viewport的meta

- 其他预定义的meta

  - Application-name：应用名称
  - author：作者名称
  - Description：页面描述
  - keywords：页面关键字，可用于seo
  - theme-color：页面风格颜色，不会影响页面样式，但浏览器可能根据此来调整页面之外的ui

### 替换型元素

替换型原素指的是，把文件内容引入，替换掉自身位置的一种标签。使用scr属性引入。

script：以下两种写法是等效的

```html
<script>
  console.log("hello");
</script>
<script src="my.js"></script>
```

Img

- img指定款宽高时，是等比缩放的。最好是直接给出宽高，因为加载完文件之后如果尺寸发生改变会引起页面重排。

- srcset 和 sizes提供了根据屏幕大小选择图片的能力

- Datauri属性，可以让img不用引用独立的文件

  ```html
  <img src='data:image/svg+xml;charset=utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/></svg>'/>
  ```

Picture

- Picture提供根据屏幕大小选择图片源的能力。支持多个

```html
<picture>
  <source srcset="image-wide.png" media="(min-width: 600px)">
  <img src="image-narrow.png">
</picture>
```

video

- 可用src指定源，也可以使用source

```html
// 老式用法
<video controls="controls" src="movie.ogg">
</video>
// 新用法，支持不用类型的源
<video controls="controls" >
  <source src="movie.webm" type="video/webm" >
  <source src="movie.ogg" type="video/ogg" >
  <source src="movie.mp4" type="video/mp4">
  You browser does not support video.
</video>
```

audio

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  <p>You browser does not support audio.</p>
</audio>
```

iframe

- 会有很多安全问题：opener、window.name、甚至是css的opacity都是黑客可以利用的漏洞。

- 在新标准中，为 iframe 加入了 sandbox 模式和 srcdoc 属性，这样，给 iframe 带来了一定的新场景。

  ```html
  <iframe sandbox srcdoc="<p>Yeah, you can see it <a href="/gallery?mode=cover&amp;amp;page=1">in my gallery</a>."></iframe>
  ```

  

总结：替换型元素的资源引入共有下面几种方式：src属性,source标签,srcset属性,srcdoc属性

### 小结

## 4. 重学浏览器API | DOM API，事件机制

### 笔记

### 小结