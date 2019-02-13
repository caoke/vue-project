<template>
    <el-container>
        <el-aside :width="asideWidth">
            <div class="logo">
                <img src="./assets/logo.png">
                vue瞎搞工程
            </div>
            <left-tree></left-tree>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import LeftTree from './components/common/LeftTree'
export default {
  name: 'App',
  components: {
    LeftTree
  },
  data () {
    return {
      asideWidth: '200px',
      interval: null
    }
  },
  computed: {

  },
  methods: {

  },
  created () {

  },
  destroyed () {

  }
}
</script>

<style lang="scss" scoped>
.el-container{
    height: 100%;
    min-width: 1200px;
}
.el-aside {
    background-color:rgb(0, 21, 41);
    box-shadow: 4px 0px 3px #aaaaaa;
    overflow: hidden;
    margin-right: 10px;
    .logo{
        color: #ffffff;
        background: #333;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        font-weight: 600;
        img{
            vertical-align:middle;
            margin: 0px 10px;
            height: 100%;
        }
    }
    .collapse{
        color: #fff;
        position: fixed;
        bottom: 20px;
        // left:20px;
        padding-left: 20px;
        text-align: center;
        span{
            margin-left: 8px;
            text-align: center;
        }
        cursor: pointer;
    }
}
.el-main {
    width: 100%;
    color: #333;
}
</style>
