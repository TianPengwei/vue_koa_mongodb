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
            <el-button type="primary" @click="goRegister">注&nbsp;&nbsp;册</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                userName : '',
                password : ''
            }
        },
        mounted() {},
        methods: {
            goRegister() {
                axios({
                    url : 'http://localhost:3000/register',
                    method : 'post',
                    data : {
                        userName : this.userName,
                        password : this.password
                    }
                }).then((res)=>{
                    console.log(res);
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