//引入fs模块
var fs = require('fs');


//打开文件 
fs.open('hello2.txt','w',function(err,fd){
    //判断是否出错
    if(!err){
        //如果没有出错，则对文件进行写入操作
        fs.write(fd,'这是异步操作',function(err){
            if(!err){
                console.log('写入成功');
            }
            //关闭文件
            fs.close(fd , function (err) {
                if(!err){
                    console.log('文件已经关闭')
                }
            })
        })
    }else{
        console.log(err);
    }

});
console.log("程序执行")