<template>
    <div class="wrap">
        <div class="mt15">
            <el-input placeholder="请输入用户名" v-model="userName">
                <template slot="prepend">用户名：</template>
            </el-input>
        </div>
        <div class="mt15">
            <el-input type="password" placeholder="请输入密码" v-model="password">
                <template slot="prepend">密&nbsp;&nbsp;&nbsp;码：</template>
            </el-input>
        </div>
        <div class="tac mt15">
            <el-button style="width:100px;" @click="login" type="primary" :loading="isLoading">登&nbsp;&nbsp;录</el-button>
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
                isLoading : false
            }
        },
        methods : {
            login() {
                this.isLoading = true;
                axios({
                    url : 'http://localhost:3000/login',
                    method : 'post',
                    data : {
                        userName : this.userName,
                        password : this.password
                    }
                }).then((res)=>{
                    const data = res.data;
                    if(data.status == '0') {
                        setTimeout(()=>{
                            this.$router.push({
                                path : '/'
                            });
                        },3000);
                    }
                    this.isLoading = false;
                    this.$message(data.msg);
                }).catch((err)=>{
                    this.$message('系统异常');
                    this.isRegisting = false;
                });;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrap{
        max-width:300px;margin:auto;
    }
</style>