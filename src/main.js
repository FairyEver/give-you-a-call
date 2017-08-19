// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'

// 路由设置
import router from '@/router'

// 消除点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  data () {
    return {
      paperEle: null
    }
  }
}).$mount('#app-box')
