// Forward API Request
// Made By YuMian123

var express = require('express');
var request = require('request');
var urlMoudule = require("url");
var sd = require('silly-datetime');
var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
const config = require('./config.json')

var app = express();


app.use('/', function(req, res) {

    var url = config.baseurl + req.url;
    if (req.query.action = "getlimit") {
        console.log("操作:", req.query.action, "用户:", req.query.user, "时间:", time)
    } else if (req.query.action = "checkproxy") {
        console.log("操作:",req.query.action, "远程端口:", req.query.remote_port, "隧道类型:", req.query.proxy_type, "隧道名:", req.query.proxy_name,  "用户:", req.query.user, "时间戳:", req.query.timestamp)
    } else if (req.query.action = "checktoken") {
        console.log("操作:", req.query.action, "Token:", req.query.apitoken, "时间:", time)
    }
    request({
        uri: url,
        method: "GET",
        json: true
    },function (_err, _res, _resBody) {
        res.json(_resBody);
    });
});

var server = app.listen(8092,()=> {
    console.log('running on 8092')
})