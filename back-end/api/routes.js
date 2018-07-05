const userSchema = require('../schema/user.js');
//设置路由
module.exports = {
    router : '',
    getRouter : function(router) {
        this.router = router;
    },
    register() {
        this.router.post('/register',async (ctx,next)=>{
            const data = ctx.request.body;
            let o = {
                msg : '',
                status : ''
            };
            let isRegister = false;           

            await userSchema.find({ userName : data.userName }).then((res,err)=>{
                if(res.length > 0) {
                    isRegister = true;
                    o.status = '-1';
                    o.msg = '该账号已存在！';
                    ctx.body = o;
                }
            });
            if(!isRegister) {
                const user = new userSchema(data);
                await user.save().then((r,e)=>{
                    o.status = '0';
                    o.msg = '注册成功，页面即将跳转！';
                    ctx.body = o;
                });
            }
        });
    },
    //登录接口
    login() {
        this.router.post('/login',async (ctx,next)=>{
            const data = ctx.request.body;
            let o = {
                msg : '登录成功，即将跳转！',
                userName : '',
                status : '0'
            };
            await userSchema.find({ userName : data.userName }).then((res,err)=>{
                //已注册
                if(res.length > 0) {
                    if(res[0].password == data.password) {
                        o.userName = res[0].userName;
                    } else {
                        o.msg = '用户名或密码错误！'
                        o.status = '-1';
                    }
                } else {
                //未注册
                   o.msg = '该用户不存在';
                   o.status = '-2'; 
                }
                ctx.body = o;
            });
        });
    }
};
