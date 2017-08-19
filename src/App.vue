<template>
  <div id="app" style="height:100%;">
    <!-- 主体布局 -->
    <view-box
      body-padding-top="46px"
      body-padding-bottom="55px">
      <!-- 顶部 -->
      <x-header
        slot="header"
        style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        :left-options="headerLeftOption"
        :title="title">
      </x-header>
      <!-- 顶部 结束 -->
      <!-- 路由视图 -->
      <transition
        name="vux-pop-in">
        <router-view class="router-view"></router-view>
      </transition>
      <!-- 路由视图 结束 -->
      <!-- 底部导航 -->
      <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
        <tabbar-item :link="{name: 'List'}">
          <div slot="icon" class="tabbar-icon">
            <span class="fa fa-navicon"></span>
          </div>
          <span slot="label">浏览</span>
        </tabbar-item>
        <tabbar-item :link="{name: 'Make'}">
          <div slot="icon" class="tabbar-icon">
            <span class="fa fa-plus-square"></span>
          </div>
          <span slot="label">制作</span>
        </tabbar-item>
        <tabbar-item :link="{name: 'About'}">
          <div slot="icon" class="tabbar-icon">
            <span class="fa fa-heart"></span>
          </div>
          <span slot="label">关于</span>
        </tabbar-item>
      </tabbar>
      <!-- 底部导航 结束 -->
    </view-box>
    <!-- 主体布局 结束 -->
  </div>
</template>

<script>
import { ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'app',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      headerLeftOption: {
        showBack: false
      }
    }
  },
  computed: {
    title () {
      return this.$route.path
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.tabbar-icon{
  font-size: 16px !important;
}
// 路由切换
.router-view{
  width: 100%;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
