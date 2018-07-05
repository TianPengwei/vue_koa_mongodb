<template>
    <div>
        <el-row>
            <el-col :span="3" class="logo">logo</el-col>
            <el-col :span="18" class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                
                <el-menu-item index="2">消息中心</el-menu-item>
                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="3" class="nick">
                <i class="el-icon-setting"></i><span class="name">nick</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .logo{text-align:center;font-size:22px;font-weight:bold;line-height:60px;}
    .nav .el-menu-demo{background:#3d8cee;color:#fff;} 
    .nav .el-menu-item{color:#fff;}
    .nick{line-height:60px;}
    .nick .name{padding:0 10px;}
</style>