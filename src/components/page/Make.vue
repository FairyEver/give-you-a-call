<template>
  <section style="padding-bottom:30px;">
    <!-- tab -->
    <box gap="10px">
      <button-tab>
        <button-tab-item @on-item-click="tabClick" :selected="tabSeleted === 0">设置</button-tab-item>
        <button-tab-item @on-item-click="tabClick" :selected="tabSeleted === 1">生成</button-tab-item>
      </button-tab>
    </box>
    <!-- 编辑界面 -->
    <section v-if="tabSeleted === 0">
      <div class="paper-group">
        <paper
          :text="text">
        </paper>
      </div>
      <box gap="10px 10px">
        <flexbox>
          <flexbox-item>
            <x-button type="default">模板</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="save">保存</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="warn">复位</x-button>
          </flexbox-item>
        </flexbox>
      </box>
      <group title="在下面输入文字">
        <x-input title='文字' v-model="text"></x-input>
      </group>
    </section>
    <!-- 生成界面 -->
    <section v-show="tabSeleted === 1">
      <div v-if="paperCloneShow" class="paper-group">
        <div ref="paper">
          <paper
            :text="text">
          </paper>
        </div>
      </div>
      <div class="paper-group">
        <img v-if="src" :src="src">
      </div>
      <divider>长按保存或分享</divider>
    </section>

  </section>
</template>

<script>
import html2canvas from 'html2canvas'
import Paper from '@/components/components/paper.vue'
import {Box, XButton, Flexbox, FlexboxItem, XInput, Group, Cell, ButtonTab, ButtonTabItem, Divider} from 'vux'
export default {
  components: {Box, XButton, Flexbox, FlexboxItem, XInput, Group, Cell, ButtonTab, ButtonTabItem, Divider, Paper},
  data () {
    return {
      height: 300,
      width: 300,
      text: '歪？有人吗？',
      src: '',
      tabSeleted: 0,
      paperCloneShow: true
    }
  },
  methods: {
    tabClick (index) {
      this.tabSeleted = index
    },
    save () {
      this.paperCloneShow = true
      this.tabSeleted = 1
      setTimeout(() => {
        this.$nextTick(() => {
          html2canvas(this.$refs.paper, {
            height: 300,
            width: 300,
            taintTest: true,
            onrendered: canvas => {
              this.src = canvas.toDataURL()
              this.paperCloneShow = false
            }
          })
        })
      }, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.paper-group{
  width: 100vw;
  height: 100vw;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
