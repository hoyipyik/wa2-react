# 期末项目的说明文档

#### 贺烨毅 2019210737 信通院信息工程25班
## 针对react项目的说明 

本项目根据react官方的建议, 使用的facebook提供的初始化脚本, 配置react工程的初始环境.
```
    yarn create react-app wa2-react
```
因此本项目最终的页面都是,通过react工程修改id为root的空白html的dom来产生的, 没有使用html页面.

react页面使用的是JSX, 严格意义上不能叫做html, 但是和html在写法形式上几乎没有差异,jsx位于每个function component的return中.

我的核心jsx代码, 就是来自先前作业的html, 在工作量上没有区别. html也都参照了老师要求的标准来完成. 

## 前后端结构和数据库的说明
react的作为前端, react官方的初始化自身带有host组件.
后端使用express的node.js作为api服务器.
数据库使用mongodb, 是一种nosql(非关系型)数据库.

express接受来自react的http请求, 根据请求连接mongodb数据库, 进行增删改查工作, 并且将前端请求的内容送回. 

## 要求的对照文档

- 至少四个部分：头部包含 logo 、尾部（包含版权等）、导航（至
少四个，有两个二级栏目或菜单）、主显示区、特色栏目

本部分程序是满足的, src/component/Home/index.js中有详细注释, 因为添加的其他功能非常多, 为了节省时间,所以其他页面不重复注释相同的内容.

- 能够改变（ CSS 方法）页面风格一次，可以反复切换。

程序满足改要求. Home中可以改变图片, 字体, 排版,输入框的颜色, 大小等等. 

因为应用了react-router-dom, 我的css风格改变是全局的. Media house的图片和文字样式也会对应改变.

- 规范的编程风格
### Js部分

js统一使用了js Es6的标准, 例如变量声明 let const, 函数使用 ()=>{}, 

对象解构 {item} = name, 

数组解构复制 newArray = [...oldArray]等

### css
采用了和页面分离

部分页面做了小窗口的适配

同时做了适应react工程要求的简单修改

### html

react工程是工作逻辑是通过修改原始空白html的dom来实现页面改变和显示

html的工程量体现在jsx中.

jsx如果和函数绑定了, 标准做法是放在对应的component中, 不做分离.

核心jsx都在return之后, 区分也比较明显, 本项目的绝大多数jsx都是先前作业的html移植而来.

- Ajax 技术的使用

使用了axios库, axios是ajax的封装.

借助es6的Promise功能, 实现和后端api服务器的http请求.

具体的内容会在注释表明

- 后端api服务器

express库支持的nodejs服务器. 注释有详细的表述.

- 数据库mongodb

mysql数据库课程已经学过了, 所以想尝试mongodb.

mongodb是非关系型数据库, 当前nodejs栈的轻量web开发大多采用mongodb.

连接读取, 增删改查, 在server.js中有详细描述.

- 用了react没有使用jsp

自己在本作业中, 第一次尝试了react16之后的react hooks函数式写法. 全工程代码量颇大, 有对生命周期和运行性能做优化, 而且也尽力增加功能, 应该远超老师要求.希望可以代替jsp部分.

- 上线和发布

线上查看效果, 120%缩放, chromium浏览器效果最佳.
http://123.56.107.143:3000