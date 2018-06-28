//数据库连接
const Mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/VueKoaMongodb';

let i = 0;

exports.dbConnect = ()=>{
    //连接数据库
    Mongoose.connect(dbUrl);
    //增加数据库连接事件监听
    Mongoose.connection.on('disconnected',()=>{
        console.log(`[database]连接失败`);
        if(i < 3) {
            Mongoose.connect(dbUrl);
            i++;
            console.log(`[database]第${i}次重连`);
        } else {
            console.log(`[database]重新链接数据库失败`);
        }
    });
    //数据库出现错误的时候
    Mongoose.connection.on('error',err=>{
        console.log(`[database]连接失败`);
        if(i < 3) {
            Mongoose.connect(dbUrl);
            i++;
            console.log(`[database]第${i}次重连`);
        } else {
            console.log(`[database]重新链接数据库失败`);
        }
    })

    //链接打开的时候
    Mongoose.connection.once('open',()=>{
        console.log(`[database]数据库连接成功:${dbUrl}`)
    })
}