<template>
  <div>
    <div>canvas</div>
    <canvas
      height="300"
      width="300"
      ref="canvas">
    </canvas>
    <div>图片{{base64}}</div>
    <img :src="base64">
    <div>返回的图片</div>
    <div ref="imgGroup"></div>
  </div>
</template>

<script>
import rasterizeHTML from 'rasterizehtml'
export default {
  data () {
    return {
      base64: ''
    }
  },
  mounted () {
    console.log(this.$root.paperEle)
    var canvas = this.$refs.canvas
    rasterizeHTML.drawHTML(this.$root.paperEle, canvas, {
      height: '300',
      width: '300'
    }).then((res) => {
      // console.log(res.svg)
      this.$refs.imgGroup.appendChild(res.image)
      this.$nextTick(() => {
        this.base64 = canvas.toDataURL('image/jpeg')
      })
    })
  }
}
</script>
