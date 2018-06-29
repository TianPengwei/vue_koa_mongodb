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
                    o.msg = '已注册';
                    ctx.body = o;
                }
            });
            if(!isRegister) {
                const user = new userSchema(data);
                await user.save().then((r,e)=>{
                    o.status = '0';
                    o.msg = '注册成功';
                    ctx.body = o;
                });
            }
        });
    }
};
