/**
 * http://usejsdoc.org/
 */
const http = require('http');
const net  = require('net');
const util = require('util');
// 随便定义的一个函数，下面会用到
function  a(){
    console.log("dajiahao");
}

var a= new Array();
a.
http.createServer([requestListener])
var server = new http.Server();
http.ServerResponse
server.on('request',(req,res)=>{
    
	
	console.log(req.headers);
    // 设置应答头信息
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('hello we are family<br>');
    res.end('server already end\n');
});
// 显示了三次这也证明了TCP的三次握手
server.on('connection',()=>{
    a();
});
server.on('close',()=>{
    console.log('server will close');
});
// 关闭服务为了触发close事件
server.close();
server.listen(8080);