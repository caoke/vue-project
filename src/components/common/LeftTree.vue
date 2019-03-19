<template>
    <el-menu
        :default-active= "activeIndex"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        :collapse-transition="false"
        background-color="rgba(0, 21, 41, 1)"
        class="el-menu-vertical-demo">
            <!-- 存在子菜单 -->
        <el-submenu v-for="(first,index) in leftTreeDatas" v-if="first.children" :index="index.toString()" :key="index" @click="clickHandler(first.href)">
                <!-- 一级菜单文案和icon -->
            <template slot="title">
                <i v-if="first.iconClass" :class="first.iconClass"></i>
                <img v-if="first.iconSrc" :src="index.toString() === activeIndex.split('-')[0] ? first.iconSrcActive : first.iconSrc"/>
                <span>{{first.title}}</span>
            </template>
                <!-- 子菜单存在孙子菜单 -->
            <el-submenu :index="index.toString()+'-'+indexs.toString()" v-if="second.children" v-for="(second,indexs) in first.children" @click="clickHandler(second.href)" :key="indexs" :class="{'is-active':activeIndex.split('-')[0].toString()+activeIndex.split('-')[1]==index+indexs.toString()}">
                <template slot="title">
                    <span>{{second.title}}</span>
                </template>
                <el-menu-item :index="index.toString()+'-'+indexs.toString()+'-'+indexss.toString()" v-for="(three,indexss) in second.children" :key="indexss" @click="clickHandler(three.href)" :class="{'is-active':getRouter==three.href}">
                    <span>{{three.title}}</span>
                </el-menu-item>
            </el-submenu>
                <!-- 子菜单不存在孙子菜单 -->
            <el-menu-item  v-else :index="index.toString()+'-'+indexs.toString()" :key="indexs" @click="clickHandler(second.href)" :class="{'is-active':getRouter===second.href}">
                <i :class="second.iconClass"></i>
                <span>{{second.title}}</span>
            </el-menu-item>
        </el-submenu>
            <!-- 只有一级菜单 -->
        <el-menu-item :index="index.toString()" v-else @click="clickHandler(first.href)" :class="{'is-active':getRouter.split('/')[1]===first.href.split('/')[1]}">
            <i :class="first.iconClass"></i>
            <span slot="title">{{first.title}}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import leftTreeDatas from '@/assets/data/leftTree.json'
// import {mapState} from 'vuex'
export default {
  props: ['routers'],
  data () {
    return {
      activeIndex: '',
      isCollapse: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.getActiveIndex()
    }
  },
  methods: {
    clickHandler (href) {
      if (href) {
        this.$router.push(href)
      }
    },
    // 处理导航选中状态
    handleActiveIndex (data, activeIndex) {
      let str = ''
      data.forEach((item, index) => {
        activeIndex = activeIndex + '-' + index
        if (item.href === this.getRouter) str = activeIndex
        if (item.children) {
          this.handleActiveIndex(item.children, activeIndex)
        }
      })
      return str
    },
    getActiveIndex () {
      this.leftTreeDatas.forEach((data, item) => {
        if (data.children) {
          data.children.forEach((value, index) => {
            if (value.children) { // 有孙子菜单
              value.children.forEach((second, indexs) => {
                if (second.href === this.getRouter) this.activeIndex = item + '-' + index + '-' + indexs
              })
            } else { // 有子菜单
              if (value.href === this.getRouter) this.activeIndex = item + '-' + index
            }
          })
          // this.activeIndex = this.handleActiveIndex(data.children, item.toString())
        } else { // 只有一级菜单
          if (data.href === this.getRouter) this.activeIndex = item.toString()
        }
      })
      // console.log(this.activeIndex)
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  computed: {
    getRouter () {
      return this.$route.path
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getActiveIndex()
    })
  },
  created () {
    this.leftTreeDatas = leftTreeDatas
  }
}
</script>

<style lang="scss">
.el-menu{
    border-right: none!important;
}
.el-menu-vertical-demo {
    color: #ffffff;
    .el-submenu__title{
        color: #ffffff;
    }
    .el-menu--inline {
        overflow: hidden;
        .el-menu-item {
            color: #ffffff;
            &:hover {
                color: #399CFF;
                background-color: rgba(33, 47, 58, 1)!important
            }
        }
    }

    .el-menu-item{
        color: #ffffff;
        &:hover {
            color: #399CFF;
            background-color: rgba(33, 47, 58, 1)!important
        }
    }
    .el-submenu__title{
        &:hover {
            color: #399CFF;
            background-color: rgba(33, 47, 58, 1)!important
        }
    }
    //左侧树hover样式修改
    .el-submenu__title{
        &:hover {
            color: #399CFF;
            background-color: rgba(33, 47, 58, 1)!important
        }
    }
    .is-active {
        color: #399CFF!important;
        background-color: rgb(33, 47, 58)!important;
    }
}
.el-menu--popup{
    background-color:rgba(33,47,58,1);
    .el-menu-item{
        font-size: 14px;
        color: #7892BD;
        &:hover {
            color: #ffffff;
            background-color: rgb(33, 47, 58)!important;
        }
        &.is-active {
            color: #399CFF;
        }
    }
}
</style>
