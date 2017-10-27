# 扫描二维码 :camera::camera::camera:

效果图如下：
***
![](img/qrcode-scan.gif)
***

`Demo1`:point_right:[演示地址](https://mxxumin.github.io/css-animation/%E6%89%AB%E6%8F%8F%E4%BA%8C%E7%BB%B4%E7%A0%81/demo1.html):point_left:

`Demo2`:point_right:[演示地址](https://mxxumin.github.io/css-animation/%E6%89%AB%E6%8F%8F%E4%BA%8C%E7%BB%B4%E7%A0%81/demo2.html):point_left:

>利用CSS3的animation属性为二维码添加扫描动画，让二维码显示更加形象生动，体验更加。 :satisfied::satisfied::satisfied:

### 扫描二维码效果的关键代码

```
.scan{
    animation:scan 1.5s linear alternate infinite;
}

@keyframes scan{
    0%{
        transform:translateY(0px);
    }
    100%{
        transform:translateY(150px);
    }
}
```


>可以通过两种方法为二维码添加扫描线条

* 1.利用background和box-shadow来添加扫描线条效果。

```
.scan{
    ...
    display:block;
    width:150px;
    height:3px;
    background:#fff;
    box-shadow:0 0 5px 3px rgba(255, 165, 0, .75);
    ...
}
```

* 2.将扫描线条作为背景图片引入进来。

```
.scan{
    ...
    display:block;
    width:150px;
    height:3px;
    background:url(img/scan.png) center center no-repeat;
    background-size:contain;
    ...
}
```

***

* html代码、css代码见`demo1.html`和`demo2.html`文件
* 图片素材见`img`文件

>二维码素材源自网易阴阳师游戏，在此感谢一下网易的哥哥姐姐们！！！
