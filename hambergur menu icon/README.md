# hambergur menu icon (汉堡形状菜单按钮)  :radio_button::radio_button::radio_button:

效果图如下：
***
![](img/hambergur-menu-btn.gif)
***

`Demo`:point_right:[演示地址](https://mxxumin.github.io/css-animation/hambergur%20menu%20icon/index.html):point_left:

### 文件中列出了5种功能相似，但在实现上略有不同的汉堡形状菜单按钮，思路大致分为两种。

***

> 第一种是利用单个`<span>`以及伪类(`:before`,`:after`)实现"汉堡形状"菜单按钮(对应`Demo`中的1)

> 第二种是利用多个`<span>`标签实现"汉堡形状"菜单按钮

  - 利用3个`<span>`标签来实现，对3个水平直线进行绝对定位，鼠标点击时，改变第1个和第3个`<span>`标签的位置并分别旋转45deg和-45deg，同时让第2个`<span>`的`width`变为0或者`opacity`为0 (对应`Demo`中的2)
  
  - 利用4个`<span>`标签来实现，对4个水平直线进行绝对定位，其中让第2个和第3个`<span>`标签重合，鼠标点击时，将第1个和第4个`<span>`标签的`width`变为0或者`opacity`为0，同时将第2个和第3个`<span>`标签分别旋转45deg和-45deg (对应`Demo`中的3)
  - 利用6个`<span>`标签来实现，其中第1个和第2个、第3个和第4个、第5个和第6个依次组合成三条水平直线，鼠标点击时让第1个和第6个旋转45deg并微调水平、垂直方向的位置；第2个和第5个旋转-45deg并微调水平、垂直方向的位置；第3个和第4个设置它的`width`变为0或者`opacity`为0 (对应`Demo`中的4)

***

* 实现代码见`index.html`文件
* css代码见`css`文件
* 图片素材见`img`文件