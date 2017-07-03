### Flex

> Flex是Flexible Box的缩写，“弹性布局”，用来为盒模型提供最大的灵活性。
任何一个容器都可以指定为Flex布局

```css
.box{
	display:flex;
}
```

行内元素也可以使用flex布局

```css
.box{
	display:inline-flex;
}
```

webkit内核的浏览器，必须加上`-webkit`前缀

```css
.box{
	display:-webkit-flex;
	display:flex;
}
```
> tips:设置为`Flex`布局之后，子元素的`float`、`clear`、`vertical-align`属性将失效。

### 二，基本概念

采用Flex布局的元素，称为Flex容器（flex container），简称“容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称“项目”。

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。
项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`

### 三、容器的属性

以下6个属性设置在容器上：

 - flex-direction  决定主轴的方向（即项目排列的方向）
 - flex-wrap
 - flex-flow
 - justify-content
 - align-items
 - align-content

##### flex-direction

```css
.box{
	flex-direction:row | row-reverse | cloumn | cloumn-reverse
}
```

!()[http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png]

它可能有4个值。

 - row(默认值)：主轴水平方向，起点在左端
 - row-reverse: 主轴水平方向，起点在右端
 - column:主轴垂直方向，起点在上沿
 - column-reverse：主轴垂直方向，起点在下沿

##### flex-wrap

>默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

!()[http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png]

```css
.box{
	flex-wrap:nowrap | wrap | wrap-reverse
}
```

它可能取三个值

(1) `nowrap`(默认值)：不换行

!()[http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png]

(2)`wrap`：换行，第一行在上方

!()[http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg]

(3)`wrap-reverse`：换行，第一行在下方

!()[http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg]

##### flex-flow

> `flex-flow`属性是`flex-direction`和`flex-wrap`属性的简写，默认值为`row nowrap`.

```css
.box{
	flex-flow:<flex-direction> || <flex-wrap>
}
```

##### justify-content 属性

> `justify-content` 属性定义了项目在主轴上的对齐方式

```css
.box{
	justify-content: flex-start | flex-end | center | space-between | space-around
}
```

