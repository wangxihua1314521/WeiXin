//字符串加密处理
import crypto from "crypto";
//个心信息配置
import config from "./config.js";

//字符串加密
function sha1(str){
  var md5sum = crypto.createHash("sha1");
  md5sum.update(str);
  str = md5sum.digest("hex");
  return str;
}
// http://wx.jsccok.cn/wechat/svonme
function main(app) {
	app.use('/wechat/token', (req, res, next)=>{
		// 获取 url 参数
	   	let { query,signature,echostr,timestamp,nonce } = req.query;

		let oriArray = new Array();
		oriArray[0] = nonce;
		oriArray[1] = timestamp;
		//这里是你在微信开发者中心页面里填的token
		oriArray[2] = config.token;
		oriArray.sort(); // ASCII 排序

		let original = oriArray.join('');

		let scyptoString = sha1(original);

		if(signature == scyptoString){
			res.send(echostr);
			console.log("Confirm and send echo back");
		}else {
			res.send(false);
			console.log("Failed!");
		}
	});
}

export default main;
