# 闪烁提示 :sparkles::sparkles::sparkles:

效果图如下：
***
![](img/shanshuo.gif)
***

`Demo`:point_right:[演示地址](https://xm2by.github.io/css-animation/%E9%97%AA%E7%83%81%E6%8F%90%E7%A4%BA/demo.html):point_left:

>利用CSS3的animation属性添加动态提示效果，让提示更加形象生动，体验更加。 :satisfied::satisfied::satisfied:

### 闪烁提示效果的关键代码

```
.twinkling{
    animation:twinkling 3s ease infinite;
}

@keyframes twinkling{
    0%{
        opacity:0;
        transform:translateY(0);
    }
    50%{
        opacity:1;
        transform:translateY(20px);
    }
    100%{
        opacity:0;
        transform:translateY(0);
    }
}
```

>将`opacity`和`tranlate()`配合使用实现闪烁提示效果

***

* html代码、css代码见`demo.html`文件
* 图片素材见`img`文件

>二维码素材源自网易楚留香游戏，在此感谢一下网易的哥哥姐姐们！！！
