const http = require('http');
const net  = require('net');
const url  = require('url');
const util = require('util');
//querystring用于处理URL中的查询字符串
const querystring = require('querystring');

http.createServer((req,res)=>{
    var posr = '';
    req.on('data',(chunk)=>{
        post+=chunk;
    });
    req.on('end',()=>{
        //将字符串变为json的格式
        post  =  querystring.parse(post);
        //向前端返回字符串
        res.end(util.inspect(post));
    });
}).listen(8080)
