// var http = require("http");
// http.createServer(function (request,response) {
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('hellow world');
// }).listen(8888)
// console.log("runing http://192.168.3.40")


// var fs = require('fs');
//阻塞代码
// var data = fs.readFileSync('./one.txt');
// console.log(data.toString());
// console.log("程序执行结束")
// //非阻塞代码
// fs.readFile('./one.txt',function (err,data) {
//     console.log(data.toString());
// })
// console.log("程序执行结束");

// // 事件
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// let listener1 = function listener1() {
//     console.log('监听器1 执行')
// }
// let listener2 = function listener2() {
//     console.log('监听器2 执行')   
// }
// eventEmitter.on('newListener', function () {
//     console.log('事件在添加新监听器时被触发');
// })
// eventEmitter.addListener("Leo",listener1);
// eventEmitter.on('Leo',listener2);


// let listenCount = require('events').EventEmitter.listenerCount(eventEmitter,'Leo');
// console.log(listenCount+'个监听器连接事件');
// eventEmitter.emit('Leo');
// eventEmitter.removeListener('Leo',listener1);
// console.log('监听器1 不在监听事件');
// eventEmitter.emit('Leo');//触发
// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'Leo');
// console.log(eventListeners + " 个监听器监听连接事件。");
// console.log('Over');

//Buffer
// let buf = Buffer.from('ruunob', 'ascii');
// console.log(buf.toString('hex'));
// let byte = Buffer.alloc(256);
// let len = byte.write('www.runoob.com');
// console.log("写入字节数 : " + len);

// steam
// var fs = require("fs");
//读取
// var readsteam = fs.createReadStream('./on.txt');
// var data = '';
// readsteam.setEncoding('utf8');
// readsteam.on('data',function (chunck) {
//     data += chunck;
// })
// readsteam.on('end', function () {
//     console.log(data);
// });

// readsteam.on('error', function (err) {
//     console.log(err.stack);
// });
// console.log("程序执行完毕");

// 写入  标示 追加 {'flags':'a'}
// var data = '我是中国人';
// var writerStream = fs.createWriteStream('./one.txt',{'flags':'a'});
// writerStream.write(data, 'UTF8');
// writerStream.end();
// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function () {
//     console.log("写入完成。");
// });
// 新 方法 拼接
// fs.appendFile('./one.txt',"哈哈哈哈",'utf8',err=> {
//     console.log(err)
// });

// writerStream.on('error', function (err) {
//     console.log(err.stack);
// });

//管道

// var readStream = fs.createReadStream('./input.txt');
// var writerStream = fs.createWriteStream('./output.txt');
// readStream.pipe(writerStream);
// console.log("程序执行完毕");
//模块
// var ind = require('./compress');
// ind.world();

var server = require('./server');
var router = require('./router');
// server.start(router.route);
console.log(__filename);
console.log(__dirname);
process.stdout.write('hello world'+'\n');