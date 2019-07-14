<template>
  <div id="app">
    <router-link :to="{path:'/map'}">百度地图</router-link>
    <router-link :to="{path:'/amap'}">高德地图</router-link>
    <router-link :to="{path:'/'}">自定义图表1</router-link>
    <router-link :to="{path:'/echarts1'}">柱状图1</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
