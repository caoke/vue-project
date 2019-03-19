<template>
  <el-main>
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in" class="animated">
    <router-view/>
    </transition>
  </el-main>
</template>

<script>
export default {
  name: 'FrameContent'
}
</script>

<style lang="scss">

</style>
