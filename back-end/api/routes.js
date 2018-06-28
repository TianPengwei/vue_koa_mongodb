const userSchema = require('../schema/user.js');
//设置路由
module.exports = {
    router : '',
    getRouter : function(router) {
        this.router = router;
    },
    register() {
        this.router.post('/register',(ctx,next)=>{
            ctx.body = ctx.request.body;
            const user = new userSchema(ctx.request.body);
            user.save().then((res,err)=>{
                if(err) {
                    console.log('[operate database]:',err);
                } else {
                    console.log('[operate database]:',res);
                }
            });
        });
    }
};
