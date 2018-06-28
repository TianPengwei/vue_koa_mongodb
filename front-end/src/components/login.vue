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
            <el-button type="primary">登&nbsp;&nbsp;录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userName : '',
                password : ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrap{
        max-width:300px;margin:auto;
    }
</style>