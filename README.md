
# 微信开发

	源码运行在 Node.js 上，所以请先安装 Node.js

## Setting

	先配置微信个人信息 修改 servers/config.js 文件


## 全局环境

	es6 编译
	npm install --global babel-cli

	使程序后台挂载
	npm install --global pm2

	开发时监听文件的变化
	npm install --global nodemon



## 项目环境

	安装项目需要依赖的模块
	npm install 

	如果遇到网络很慢，不放试试 npm run _i，内部使用的是 taobao 的镜像

	如果有安装 yarn  可使用 yarn install 项目依赖模块

## 开发环境

	使用 babel 把 es6 编译为 es5
	npm run babel

	使用 nodemon 监听文件的变化，可自动重启服务
	npm run nodemon 
---


## 线上环境

## start

	内部会先使用 babel 编译 es5 ，然后使用 pm2 挂载 node 线程
	npm start

## stop

	停止服务运行
	npm stop

## restart

	重启服务
	npm start