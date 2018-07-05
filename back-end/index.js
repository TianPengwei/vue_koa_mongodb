const Koa = require('koa');
//引入koa-router中间件
const KoaRouter = require('koa-router');
//引入连接数据模块
const { dbConnect } = require('./db.js');
const app = new Koa();
const router = new KoaRouter();

//实现post请求
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
//实现跨域
const cors = require('koa2-cors')
app.use(cors()) 

//获取api路由配置
const routerConfig = require('./api/routes');
routerConfig.getRouter(router);
routerConfig.register();
routerConfig.login();

// router.get('/test/:id',(ctx,next)=>{
//     ctx.body = `页面id：${ctx.params.id}`;
// });

//注册router到app对象
app.use(router.routes());

//启动服务
app.listen(3000,()=>{
    console.log(`[server]服务已启动:http://localhost:3000`);
    //链接数据库
    dbConnect();
});