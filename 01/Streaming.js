var fs = require('fs');

var ws =fs.createWriteStream("hello3.txt");
  /*
	on(事件字符串,回调函数)
		- 可以为对象绑定一个事件

	once(事件字符串,回调函数)
		- 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效

  */
 ws.once("open",function(){
     console.log("流打开了");

 });
 ws.once("close",function(){
     console.log("流关闭了")
 });
 ws.write("通过可写流，写入的内容")
 ws.write("通过可写流，写入的内容")
 ws.write("通过可写流，写入的内容")
 ws.write("通过可写流，写入的内容")
 ws.write("通过可写流，写入的内容")
 //关闭流
 ws.end()