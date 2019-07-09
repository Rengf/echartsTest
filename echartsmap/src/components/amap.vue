<template>
  <div class="mapbox">
    <div class="amap-wrapper">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap class="amap-box" vid="map" 
        :zoom="zoom"
        :center="center" 
        :plugin="plugin">
        <el-amap-marker vid="marker" 
          :position="center" 
          :label="label"
           >
        </el-amap-marker>
        <el-amap-circle  vid="circle"
          :center="center" 
          :radius="radius" 
          fill-opacity="0.2"
          strokeColor="#38f"
          strokeOpacity="0.8"
          strokeWeight="1"
          fillColor="#38f"
          >
        </el-amap-circle>
        <el-amap-marker v-for="(marker,index) in markers" :position="marker" :key="index"></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>
<script>
export default {
  name:'home',
  data(){
    let vm=this;
    return{
       markers: [],
       searchOption: {
            city: '',
            citylimit: true
          },
      msg:'vue-amap demo',
      zoom:16,
      center:[121.406051,31.179695],
      label:{
        content:'',
        offset:[10,12]
      },
      radius:100,
      plugin: [{
            pName: 'MapType',
            defaultType: 0,
            showRoad: true
          },
        {
          pName: 'ToolBar',//工具条插件
          position:'LB',
        },
        {
          pName: 'MapType',//卫星与地图切换
          defaultType: 0,
          showTraffic:true,//实时交通图层
        },
        {
          pName:'OverView',
          isOpen:true//鹰眼是否打开
        },
        {
          pName:'Scale'
        },
        {
          pName:'Geolocation',//定位插件
          showMarker:false,
          events:{
            init(o){
              //定位成功 自动将marker和circle移到定位点
              o.getCurrentPosition((status, result) => {
                console.log(result);
                vm.center=[result.position.lng,result.position.lat]
              });
            }
          }
        }
      ]
    }
  },
  methods:{
    addMarker() {
          let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
          let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
          this.markers.push([lng, lat]);
        },
    onSearchResult(pois) {
          let latSum = 0;
          let lngSum = 0;
          if (pois.length > 0) {
            pois.forEach(poi => {
              let {lng, lat} = poi;
              lngSum += lng;
              latSum += lat;
              this.markers.push([poi.lng, poi.lat]);
            });
            let searchcenter = {
              lng: lngSum / pois.length,
              lat: latSum / pois.length
            };
            this.center = [searchcenter.lng, searchcenter.lat];
            console.log(this.center)
          }
        }
  }
}
</script>
<style scoped>
.mapbox{
  width: 80%;
  margin: auto;
}
.amap-wrapper{
  height: 500px;
}
.amap-demo {
  height: 300px;
  }
    .amap-page-container {
      position: relative;
    }
</style>