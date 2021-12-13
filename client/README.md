# 期末项目的说明文档
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


