<template>
    <el-container>
        <el-header>
            <FrameHeader></FrameHeader>
        </el-header>
        <el-container class="content">
            <FrameSide></FrameSide>
            <FrameContent></FrameContent>
        </el-container>
        <FrameFooter></FrameFooter>
    </el-container>
</template>

<script>
import { FrameHeader, FrameSide, FrameContent, FrameFooter } from './index'
export default {
  name: 'Frame',
  components: {
    FrameHeader,
    FrameSide,
    FrameContent,
    FrameFooter
  }
}
</script>

<style lang="scss">
.el-header{
    background-color:rgb(0, 21, 41);
}
.el-container{
    height: 100%;
    .content{
        height: calc( 100% - 60px );
    }
}
</style>
