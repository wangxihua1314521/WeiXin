import path from "path";

import express from "express";

//post 请求处理模块
import bodyparser from "body-parser";

const app = new express();

//处理 post 请求，将 post 请求的数据封装为 json 
app.use(bodyparser.urlencoded({
	extended: true
}));


require("./token.js")(app);
require("./jssdk.js")(app);

// process.cwd() 返回 node.js 进程的目录

let saticpath = path.join(process.cwd() , "static");
app.use(express.static(saticpath));


const prot = 9876;

app.listen(prot,function(){
	let _host  = "127.0.0.1";
  	let _port  = prot;
  	console.log('Example app listening at http://%s:%s', _host, _port);
});
