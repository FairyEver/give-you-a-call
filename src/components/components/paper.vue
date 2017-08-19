<template>
  <div :style="paperStyle">
    <img
      :style="imgStyle"
      v-if="model === 'call'"
      src="~@/assets/face/1.png">
    <div :style="textStyle">{{text}}</div>
  </div>
</template>

<script>
import face from './face'
export default {
  name: 'paper',
  props: {
    height: {default: 300},
    width: {default: 300},
    bg: {default: '#FFF'},
    model: {default: 'call'},
    text: {default: '输入文字'}
  },
  computed: {
    paperStyle () {
      return {
        height: this.height + 'px',
        width: this.width + 'px',
        backgroundColor: this.bg
      }
    },
    imgStyle () {
      return {
        width: '240px',
        margin: '30px',
        zIndex: '999'
      }
    },
    textStyle () {
      return {
        textAlign: 'center',
        fontSize: '32px',
        fontFamily: '"Arial","Microsoft YaHei","黑体","宋体",sans-serif'
      }
    },
    faceActive () {
      return face[this.model]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
