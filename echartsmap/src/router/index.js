import Vue from 'vue'
import Router from 'vue-router'
import MyEcharts from '@/components/myEcharts'
import Echarts1 from '@/components/echarts1'
import Echarts2 from '@/components/echarts2'
import MyMap from '@/components/myMap'
import VueAMap from '@/components/amap'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'MyEcharts',
        component: MyEcharts,
        meta: {
            title: "自定义条形图1"
        }
    }, {
        path: '/echarts1',
        name: 'Echarts1',
        component: Echarts1,
        meta: {
            title: "柱状图1"
        }
    },{
        path: '/echarts2',
        name: 'Echarts2',
        component: Echarts2,
        meta: {
            title: "折线图1"
        }
    }, {
        path: '/map',
        name: 'MyMap',
        component: MyMap,
        meta: {
            title: "百度地图"
        }
    }, {
        path: '/amap',
        name: 'VueAMap',
        component: VueAMap,
        meta: {
            title: "高德地图"
        }
    }]
})