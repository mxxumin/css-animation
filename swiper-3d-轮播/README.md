# 利用swiper插件制作3d轮播注意事项 

>swiper是一款非常强大的轮播图制作插件，今天在做项目的时候就用到了swiper插件制作一个3d效果的轮播，制作过程中“踩”了不少坑，现在打算把这些坑做上标记，防止下次再掉进去。

下面是我做的一个简单的demo，实现这种3d效果利用的是swiper插件中的coverflow效果。

效果图如下：
***
![](img/lunbo.gif)
***

`Demo`:point_right:[演示地址](https://mxxumin.github.io/css-animation/swiper-3d-%E8%BD%AE%E6%92%AD/index.html):point_left:

### swiper插件中coverflow效果配制参数说明：
***
* effect:
* slidesPerView:
* centeredSlides:
* rotate: 
* stretch:
* depth:
* modifier
* slideShawdows:

### 需要注意的坑：
***
* slidesPerView与swiper-container的宽度是相关的。swiper-container的宽度除以slidesPerView的数值，得到的就是每个swiper-slide的宽度。
 - 当swiper-slide的宽度小于其子标签img的宽度的时候，会导致img标签的图像在页面显示的时候不居中，这个时候就需要利用css的技巧使得img图像居中显示。做法：
 ```
 .swiper-slide{
    position:relative;
    ...
 } 
 .swiper-slide img{
    position:absolute;
    top:...;
    left:50%;
    width:...;
    height:...;
    margin-left:-width/2;
    ....
 }
 ```
* slideShawdows

***
* 实现代码见`index.html`文件
* css代码见`css`文件
* js代码见`js`文件
* 图片素材见`img`文件

>`Notice`:图片素材取自网易游戏——率土之滨官网，在此感谢网易游戏的哥哥姐姐们！！！