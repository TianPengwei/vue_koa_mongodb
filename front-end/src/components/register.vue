<template>
    <div class="wrap">
        <div class="mt15">
            <el-input placeholder="请输入用户名" auto-complete="off" v-model="userName" clearable>
                <template slot="prepend">用户名：</template>
            </el-input>
        </div>
        <div class="mt15">
            <el-input type="password" placeholder="请输入密码" v-model="password" clearable>
                <template slot="prepend">密&nbsp;&nbsp;&nbsp;码：</template>
            </el-input>
        </div>
        <div class="tac mt15">
            <el-button style="width:100px;" type="primary" :loading="isRegisting" @click="goRegister">注册</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                userName : '',
                password : '',
                isRegisting : false
            }
        },
        mounted() {},
        methods: {
            goRegister() {
                this.isRegisting = true;
                axios({
                    url : 'http://localhost:3000/register',
                    method : 'post',
                    data : {
                        userName : this.userName,
                        password : this.password
                    }
                }).then((res)=>{
                    this.isRegisting = false;
                    const o = res.data;
                    if(o.status == '0') {
                        setTimeout(()=>{
                            this.$router.push({
                                path : '/index'
                            });
                        },3000);
                    }
                    this.$message(res.data.msg);
                }).catch((err)=>{
                    this.$message('系统异常');
                    this.isRegisting = false;
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrap{
        max-width:300px;margin:auto;
    }
</style>