import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/iconfont/iconcss/iconfont.css'
import './assets/iconfont/iconcss/iconfont.js'
import './assets/iconfont2/iconfont.css'
import './assets/iconfont2/iconfont.js'
import { Icon } from 'vant'

import './assets/css/reset.css'
Vue.use(Icon);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')