<template>
    <div>
        <el-container>
            <el-header style="background:#3d8cee;color:#fff;">
                <head-top></head-top>
            </el-header>            
            <el-container>
                <el-aside width="180px" style="overflow:hidden;">
                    <slider-bar></slider-bar>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import sliderBar from './sliderBar';
    import headTop from './header';
    export default {
        components : {
            sliderBar,
            headTop
        }
    }
</script>

<style scoped>

</style>