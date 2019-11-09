import Vue from 'vue'
import Router from 'vue-router'
import zxlbanner from './views/zxlbanner.vue'
import zxlt from './components/zxl-t'
import zxlitem from './components/zxlitem'
import zxlnav1 from './views/zxlnav1'
import zxltuwen from './components/zxltuwen'
import zxlxiang from './components/zxlxiang'
import zxlping from './components/zxlping'
import zxlcart from './views/zxlcar'
import cstlist from '@/components/cstlist.vue'
import item from "@/components/cstlistitem";
// 登录头部
import cstnav from "@/components/cstnav";
// 跳转详情页
import cstlistadd from "@/components/cstlistadd";
// 登录框
import register from '@/components/cstregister';
// 注册 
import join from '@/components/cstjoin'
// 个人中心
import cpeo from '@/components/cstcenter'
import ccent from '@/components/ccent1'
import cstlistadd1 from '@/components/cstlistadd1'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: '/',
            components: {
                nav: zxlt,
                default: zxlbanner
            }
        },
        {
            path: '/1',
            name: '/1',
            components: {
                nav: zxlnav1,
                default: zxlxiang,
            }
        }, {
            path: '/tu',
            name: '/tu',
            components: {
                nav: zxlnav1,
                default: zxltuwen,
            }
        }, {
            path: '/xiang',
            name: '/xiang',
            components: {
                nav: zxlnav1,
                default: zxlxiang,
            }
        }, {
            path: '/ping',
            name: '/ping',
            components: {
                nav: zxlnav1,
                default: zxlping,
            }
        }, {
            path: '/car',
            name: '/car',
            components: {
                nav: zxlnav1,
                default: zxlcart,
            }
        },
        {
            path: '/li',
            name: 'cstlist',
            component: cstlist
        },
        {
            path: '/cstlistadd/:nu1',
            name: 'cstlistadd',
            component: cstlistadd
        },
        // 登录路由
        {
            path: '/register',
            name: 'register',
            component: register,
        },
        // 注册路由
        {
            path: '/join',
            name: 'join',
            component: join
        },
        // 个人中心
        {
            path: '/cpeo',
            name: 'cpeo',
            component: cpeo,
        },
        {
            path: '/ccent/:lst',
            name: 'ccent',
            component: ccent,
        }

    ]
})