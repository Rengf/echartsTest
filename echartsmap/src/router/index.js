import Vue from 'vue'
import Router from 'vue-router'
import MyEcharts from '@/components/myEcharts'
import MyMap from '@/components/myMap'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'MyEcharts',
        component: MyEcharts
    }, {
        path: '/map',
        name: 'MyMap',
        component: MyMap
    }]
})