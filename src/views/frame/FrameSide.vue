<template>
    <el-aside :width="asideWidth">
        <el-menu
            :default-active="currentPath"
            :collapse="isCollapse"
            background-color="rgba(0, 21, 41, 1)"
            :collapse-transition="false"
            class="el-menu-vertical-demo"
            >
            <template v-for="(item) in routers">
                <!-- 只有一级菜单 -->
                <router-link v-if="!item.hidden && item.noDropdown" :key="item.path" :to="item.path">
                    <el-menu-item :index="item.path">
                        <i :class="item.icon"></i>
                        <span  slot="title">{{item.name}}</span>
                    </el-menu-item>
                </router-link>
                <!-- 存在子菜单 -->
                <el-submenu v-if="!item.hidden && !item.noDropdown" :key="item.path" :index="item.path">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span v-if="item.name">{{item.name}}</span>
                </template>

                <template v-for="child in item.children" v-if="!child.hidden">
                    <!-- 存在孙子菜单 -->
                    <el-submenu v-if="!child.hidden && !child.noDropdown" :key="child.path" :index="child.path">
                        <template slot="title">
                            <i :class="child.icon"></i>
                            <span v-if="child.name">{{child.name}}</span>
                        </template>
                        <template v-for="grandson in child.children" v-if="!grandson.hidden">
                            <router-link :to="item.path+'/'+child.path+'/'+grandson.path" :key="grandson.path">
                                <el-menu-item :index="item.path+'/'+child.path+'/'+grandson.path">
                                    <i :class="grandson.icon"></i>
                                    <span slot="title">{{grandson.name}}</span>
                                </el-menu-item>
                            </router-link>
                        </template>
                    </el-submenu>
                    <!-- 不存在孙子菜单 -->
                    <router-link v-else :to="item.path+'/'+child.path" :key="child.path">
                        <el-menu-item :index="item.path+'/'+child.path">
                            <i :class="item.icon"></i>
                            <span slot="title">{{child.name}}</span>
                        </el-menu-item>
                    </router-link>

                </template>
                </el-submenu>
            </template>
        </el-menu>
        <div class="collapse-box" @click="switchCollapse">
            <i :class="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"></i>
        </div>
  </el-aside>
</template>

<script>

export default {
  name: 'FrameSide',
  components: {
  },
  data () {
    return {
      routers: [],
      isCollapse: false
    }
  },
  watch: {
  },
  computed: {
    currentPath () {
      return ''
    },
    asideWidth () {
      return this.isCollapse ? '64px' : '220px'
    }
  },
  methods: {
    switchCollapse () {
      this.isCollapse = !this.isCollapse
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style lang="scss">
.el-aside {
    position: relative;
    background-color:rgb(0, 21, 41);
    box-shadow: 4px 0px 3px #aaaaaa;
    .collapse-box{
        cursor: pointer;
        position: absolute;
        bottom: 0px;
        border-top: 1px solid #ccc;
        width: 100%;
        text-align: right;
        padding: 10px 0px;
        i{
            color: #ffffff;
            font-size: 18px;
            span{
                font-size: 14px;
                margin-left: 10px;
            }
            margin-right: 10px;
        }
    }
}

.el-menu{
    border-right: none!important;
}
.el-menu-vertical-demo, .el-menu--vertical {
    color: #ffffff;
    a{
        text-decoration: none;
    }
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

</style>
