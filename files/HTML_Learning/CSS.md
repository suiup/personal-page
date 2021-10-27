# CSS

## 选择器

### 基础选择器

- 由单个选择器组成
- 包括 **标签选择器**， **类选择器**， **id选择器**，和**通配符选择器**

#### 标签选择器

HTML 标签名称作为选择器

标签名 {	

​		属性1： 属性值1;

​		属性2： 属性值2;

}



#### 类选择器

.类名 {

​		属性1： 属性值1;

​		属性2： 属性值2;

}



#### id 选择器

#id名{

​		属性1： 属性值;

​		... ...

}



#### 通配符选择器

在CSS 中， 通配符选择器使用 <font color="red">*</font> 定义，表示选取页面中所有元素（标签）



\*  {

​		属性1： 属性值1;

​		... ...

}



- 不需要调用，直接就给所有的元素使用样式了
- 特殊情况才用



### 复合选择器

#### 后代选择器 (所有后代)

又称为<font color="red">包含选择器</font>， 可以选择父元素里面子元素。 其写法就是把**外层标签写在前面**，**内层标签写在后面**，**中间用空格分隔**。 当标签发生嵌套时，内层标签就成为外层标签的后代

**语法：**

<font color="blue">元素1 元素2 {样式声明}</font>

```css
ol li {
	color: red;
}
```



#### 子选择器 （最近的后代）

<font color="red">子元素选择器</font> 只能选择作为某元素的最近一级子元素，简单理解就是选亲儿子元素

**语法：**

<font color="blue">元素1 > 元素2 {样式声明}</font>

表示为**选择元素1里面的所有直接后代（子元素）元素2**

```css
div > p {color: red}
```



#### 并集选择器

<font color="red">并集选择器可以选择多组标签，同时为他们定义相同的样式</font>， 通常用于集体声明



各个选择器通过 <font color="red">逗号（,）</font>链接而成， **任何形式的选择器**都可以作为并集选择器的一部分



**语法：**

<font color="blue">元素1, 元素2 {样式声明}</font>

```css
ul, div {color: red;}
```



#### 伪类选择器

用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或选择第一个，第n个元素

伪类选择器最大的特点就是用<font color="red">冒号(:)</font>表示, 比如 :hover, :first-child

伪类选择器很多，比如有链接伪类，结构伪类等。

一些常用的伪类选择器



```css
a: link			/* 选择所有未被访问的链接*/
a: visited		/* 选择所有已被访问的链接*/
a: hover		/* 选择鼠标指针位于其上的链接*/
a: active		/* 选择活动链接 （鼠标按下未弹起）*/
```

* 这几个选择器需要按照顺序声明



开发中的写法

```css
a {
    color: gray;
}

a:hover {
    color: red;
}
```





<font color="blue">:focus 伪类选择器</font>

用于选取获得焦点的表单元素

焦点就是光标，一般情况下 \<input> 类表单元素才能获取， 因此这个选择器也主要针对表单元素来说

```css
input:focus {
    background-color: yellow;
}
```



## CSS 字体属性

CSS font 属性用于定义 字体系列，大小，粗细和文字样式 （如斜体）



CSS使用 <font color="red">font-family</font> 定义字体



```css
div {
    font-family: Arial, "Microsoft Yahei";
}
```

- 各种字体之间必须使用逗号隔开
- 一般情况下，如果有空格隔开的多个单词组成的字体，加引号



<font color="red">font-size </font>属性定义字体大小



<font color="red">font-weight</font> 属性设置文本字体粗细

| 属性值  | 描述                                               |
| ------- | -------------------------------------------------- |
| normal  | 默认值（不加粗的）                                 |
| bold    | 定义粗体（加粗的）                                 |
| 100-900 | 400 等同于normal,700等同于bold，其后边数字没有单位 |





<font color="red">font-style</font> 设置文本风格

| 属性值 | 作用                     |
| ------ | ------------------------ |
| normal | 默认值，显示标准字体样式 |
| italic | 显示斜体的字体形式       |



字体复合属性





```css
body {
    font: font-style font-weight font-size/line--height font-family;
}
```

- 使用font 属性时，必须按照上面的语法格式中的顺序写，不能更换顺序，并且各个属性之间用空格隔开

- 不需要的属性可以省略，但是必须保留 <font color="red">font-size 和 font-family 属性</font>，否则 font 属性将不起作用

  





## CSS 文本属性

可以定义文本的外观，比如文本的颜色，对齐文本，装饰文本，文本缩进，行间距等



**颜色**

```css
div {
	color:  red;
}
```



**文本对齐**

text-align 属性用于设置元素内<font color="red">文本内容</font> 的<font color="blue">水平对齐</font>方式

```css
div {
	text-align: center;
}
```

| 属性值 | 解释             |
| ------ | ---------------- |
| left   | 左对齐（默认值） |
| right  | 右对齐           |
| center | 居中对齐         |



 **装饰文本**

<font color="red">text-decoration</font> 属性规定添加到文本的修饰，可以给文本添加下划线，删除线，上划线等

```css
div {
	text-decoration: underline
}
```

| 属性值       | 描述                              |
| ------------ | --------------------------------- |
| none         | 默认，没有装饰线（最常用）        |
| underline    | 下划线， a 链接自带下划线（常用） |
| overline     | 上划线（几乎不用）                |
| line-through | 删除线 （不常用）                 |

```
a {
	text-decoration: none;
	color: #333;
}
```





**文本缩进**

<font color="red">text-indent</font> 用来指定文本的第一行的缩进，通常将段落的首行缩进

div {

​		text-indent: 10px;

}

- em 是一个相对单位， 就是当前元素 （font-size）1 个文字大小，如果当前元素没有设置大小，则会按照父元素的1个文字大小 (16px)
- 如果是2em, 则是缩进当前元素2个文字大小的距离



**行间距**

<font color="red">line-height</font> 用于设置行间的距离（行高）， 可以控制文字行与行之间的距离

p {

​		line-height: 26px;

}



**文本属性总结**

| 属性            | 表示     | 注意点                                            |
| --------------- | -------- | ------------------------------------------------- |
| color           | 文本颜色 | 通常用16进制                                      |
| text-align      | 文本对齐 | 文字水平对齐方式                                  |
| text-indent     | 文本缩进 | 通常用于段落首行缩进2个字的距离 text-indent: 2em; |
| text-decoration | 文本修饰 | 添加下划线 underline  取消下划线 none             |
| line-height     | 行高     | 控制行与行之间的距离                              |



## CSS 引入方式

### 行内样式表 （行内式）

在元素标签内部设置 style 属性

```html
<div style="color: red; font-size: 12px;">hello world</div>
```

不推荐大量使用，可以添加简单样式

### 内部样式表 （嵌入式）

放到 \<style>\</style> 中

```html
<style>
    div {
        color: red;
        font-size: 12px;
    }
</style>
```

- 一般会放在文档的 \<head> 标签中



### 外部样式表 （链接式）

实际开发时都是外部的样式表， 使用于样式比较多的时候



1. 新建一个后缀名为.css 的样式文件，把所有的 CSS 代码都放入这个文件中
2. 在 HTML 页面中，使用 \<link>  标签引入这个文件

```html
<link rel="stylesheet" href="css 文件路径">

```

- rel: 定义当前文档与被链接文档之间的关系，在这里需要指定为 “stylesheet”， 表示被链接的文档是一个样式表文件
- href: 定义所在链接外部样式表文件的 URL, 可以是绝对路径，也可以是相对路径



## Chrome 调试工具







## CSS元素的显示模式

作用： 网页的标签非常多，在不同地方会用到不同类型的标签， 了解他们的特点<font color="red">可以更好的布局我们的网页</font>



元素显示模式就是<font color="red">元素（标签）以什么方式进行显示</font>，比如 \<div> 自己占一行，比如一行可以放多个\<span>



HTML 元素一般分为 <font color="red">块元素</font> 和 <font color="red">行内元素</font>两种类型



### 块元素

常见的块元素有 \<h1>~\<h6>, \<p>, \<div>, \<ul>, \<ol>, \<li> 等，其中 **\<div> 标签是最典型的块元素**

**特点：**

* 可以自己独占一行
* 高度，宽度，外边距以及内边距都可以控制
* 宽度默认是容器的 100%
* 是一个容器及盒子，里面可以放行内或者块级元素



<font color="red">注意：</font>

* 文字类的元素内不能使用块级元素
* \<p> 标签主要用于存放文字，因此，\<p> 里面不能放块级元素，特别是不能放 \<div>

* 同理， \<h1>~\<h6> 等都是文字类块级标签，里面也不能放其他块级元素



### 行内元素

常见的行内元素： \<a>, \<strong>, \<b>, \<em>, \<i>, \<del>, \<s>, \<ins>, \<u>, \<span> 等，其中，**\<span>标签是最典型的行内元素 **。 有的也叫**内联元素**

**特点：**

* 相邻行内元素在一行上，一行可以显示多个
* 高， 宽直接设置是无效的
* 默认宽度就是它本身内容的宽度
* 行内元素只能容纳文本或其他行内元素



<font color="red">注意：</font>

* 链接里面不能再放链接
* 特殊情况链接 \<a> 里面可以放块级元素，但是给 \<a> 转换一下块级模式最安全



### 行内块元素

在行内元素中有几个特殊的标签， \<img/> , \<input>, \<td>, 他们同时具有块元素和行内元素的特点, 有些资料称他们为行内块元素

**特点**：

* 和相邻行内元素在一行上，但是他们之间会有空白缝隙，一行可以显示多个
* 默认宽度就是它本身内容的宽度
* 高度， 行高，外边距以及内边距都可以控制 (块级元素的特点)







总结：



| 元素模式   | 元素排列               | 设置样式           | 默认宽度         | 包含                     |
| ---------- | ---------------------- | ------------------ | ---------------- | ------------------------ |
| 块级元素   | 一行只能放一个块级元素 | 可以设置宽度高度   | 容器的 100%      | 容器级可以包含任何标签   |
| 行内元素   | 一行可以放多个行内元素 | 不可以直接设置宽度 | 它本身内容的宽度 | 容纳文本或者其他行内元素 |
| 行内块元素 | 一行放多个行内块元素   | 可以设置宽度高度   | 它本身内容的宽度 |                          |



### 元素显示模式的转换

特殊情况下，我们需要元素模式的转换，简单理解：一个模式的元素需要另外一种模式的特性，比如想要增加链接 \<a> 的出发范围



* <font color="red">转换为块元素 display: block;</font>

* 转换为行内元素： display: inline;
* <font color="blue">转换为行内块：display: inline-block;</font>



### 单行文字垂直居中

CSS 没有提供文字垂直居中的代码，需要用技巧实现

解决方案： **让文字的行高等于盒子的高度**， 就可以让文字在盒子里面垂直居中

```css
a {
    display: block;
    height: 40px;
    line-height: 40px;
}
```



## CSS背景

通过CSS 背景属性，可以给页面元素添加背景样式

背景属性可以设置背景颜色，背景图片，背景平铺，背景图片位置，背景图像固定等



### 背景颜色

<font color="red">background-color</font> 属性定义了元素的背景颜色

```css
background-color: red;
```

### 背景图片

<font color="red">background-image</font> 属性描述了元素的背景图像。实际开发常见于 logo 或者一些装饰性的小图片或者是超大的背景图片，有点是非常便于控制位置 （精灵图也是一种运用场景）

```css
background-image: none | url;


div {
    background-image: url(images/logo.png)
}
```

| 参数值 | 作用                           |
| ------ | ------------------------------ |
| none   | 无背景图 （默认）              |
| url    | 使用绝对或相对地址指定背景图像 |



### 背景平铺

<font color="red">background-repeat</font>

```css
background-repeat: repeat | no-repeat | repeat-x | repeat-y
```



### 背景图片位置

<font color="red">background-position</font>属性可以改变图片在背景中的位置

```css
background-position: x y;
```

参数代表的意思是：  x 坐标和 y 坐标。 可以使用 <font color="red">方位名词</font> 或者 <font color="red">精确单位</font>

| 参数值   | 说明                                                        |
| -------- | ----------------------------------------------------------- |
| length   | 百分数 \| 由浮点数字和单位标识符组成的长度值                |
| position | top \| center \| bottom \| left \| center \| right 方位名词 |



1. 如果是方位名词
   * 如果指定的两个词都是方位名词，则两个值前后顺序无关， 比如 left top 和 top left 效果一致
   * 如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐

2. 参数是精确单位
   * 如果参数是精确坐标，那么第一个肯定是x坐标，第二个是y坐标
   * 如果只指定一个数值，那么该数值一定是x坐标，另一个默认垂直居中
3. 参数是混合单位
   * 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是x坐标，第二个值是y坐标



### 背景图像固定（背景附着）

<font color="red">background-attachment</font>属性设置背景图像是否固定或者随着页面的其余部分滚动

可以在后期制作视差滚动的效果



```css
background-attachment : scroll | fixed
```



### 背景复合写法

为了简化背景属性的代码，可以将这些属性合并简写在同一个属性 background 中，从而节约代码量

一般约定的顺序为：

<font color="red">background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置</font>

```css
background: transparent url(image.jpg) repeat-y fixed top;
```



### 背景色半透明

CSS3 为我们提供了背景颜色半透明的效果

```css
background: rgba(0, 0, 0, 0.3);
```

* 习惯把 0.3 的 0 省略，写为 background: rgba(0,0,0,.3)
* 注意：背景半透明是指盒子背景半透明，盒子里面的内容不受影响
* CSS3 新增属性



| 属性                  | 作用     | 值                                                       |
| --------------------- | -------- | -------------------------------------------------------- |
| background-color      | 颜色背景 | 预定义的颜色值/十六进制/RGB代码                          |
| background-image      |          | url(图片路径)                                            |
| background-repeat     |          | repeat/no-repeat/repeat-x/repeat-y                       |
| background-position   |          | length/position 分别是x 和 y 坐标                        |
| background-attachment |          | scroll/fixed                                             |
| 背景简写              |          | 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置 |
| 背景色半透明          |          | background: rgba(0,0,0,.3) ;                             |









