/**
 * share common with main point
 * 主要是为了分享main.js的入口压力
 */
import Vue from 'vue'
import Element from 'element-ui'
import Util from './util/utils'
import ApiPath from '@/assets/api/apiPath'
import 'element-ui/lib/theme-chalk/index.css'
import './components/global'
import './css/index.scss'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 示例表格用的
Vue.use(Element)
/**
 * 工具类对象没有选择使用混入，直接注入原型
 */
Vue.prototype.$util = Util
Vue.prototype.apiPath = ApiPath
