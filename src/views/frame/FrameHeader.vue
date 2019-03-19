<template>
    <div class="index-nav">
        <div class="logo">
            <img src="../../assets/logo.png" alt="" height="40px">
            <span>vue瞎搞工程</span>
        </div>
        <div class="user">
            <div class="login">
                <span>Hi,&nbsp;&nbsp;&nbsp;{{userName}}&nbsp;&nbsp;&nbsp;</span>
                <a class="logout" @click="logout">退出</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'FrameHeader',
  props: {
    // logo居中
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName
    })
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions({
      doLogout: 'logout'
    }),
    logout () {
      this.doLogout().then((result) => {
        this.$router.push({ path: '/login' })
      }).catch((err) => {
        console.log(err)
      })
    },
    // 触发退出
    dropOut (data) {
      this[data]()
    }
  }
}
</script>

<style lang="scss" scoped>
.index-nav{
    z-index: 10;
    width: 100%;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    .logo{
        width: 220px;
        font-size: 18px;
        font-weight: 500;
        img{
            vertical-align: middle;
        }
    }
    .user{
        width: 220px;
        text-align: left;
        //border-bottom:1px solid #e7e3e3;
        display: flex;
        justify-content:flex-start;
        cursor: pointer;
        span{
            margin-right: 14px;
        }
        .logout {
            float: right;
            color: #fff;
            padding-left: 5px;
            &:hover {
                color: #389CFF;
            }
        }
    }
}
</style>
