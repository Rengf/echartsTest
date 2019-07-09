<template>
  <div style="padding-top:50px; border:1px solid red">
    <div @on-cancel="cancel" width="800" :closable="false" :mask-closable="false">
      <baidu-map v-bind:style="mapStyle" class="bm-view" ak="你的密钥"
      :center="center" 
      :zoom="zoom" 
      :scroll-wheel-zoom="true" 
      @click="getClickInfo"
      @ready="handler"
      @moving="syncCenterAndZoom" 
      @moveend="syncCenterAndZoom" 
      @zoomend="syncCenterAndZoom">
        <bm-view style="width: 100%; height:500px;"></bm-view>
        <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
        </bm-marker>
        <bm-control :offset="{width: '10px', height: '10px'}">
          <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 999999}">
            <input type="text" placeholder="请输入搜索关键字" v-model="keyword" class="serachinput">
          </bm-auto-complete>
        </bm-control>
        <bm-local-search :keyword="keyword" :auto-viewport="true" style="width:0px;height:0px;overflow: hidden;"></bm-local-search>
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      </baidu-map>
      <div slot="footer" style="margin-top: 0px;">
        <Button @click="cancel" type="ghost"
                style="width: 60px;height: 36px;">取消
        </Button>
        <Button type="primary" style="width: 60px;height: 36px;" @click="confirm">确定</Button>
      </div>
    </div>
  </div>  
</template>
<script>
  export default {
    data: function () {
      return {
        keyword: '',
        mapStyle: {
          width: '100%',
          height: this.mapHeight + 'px'
        },
        center: {lng: 116.404, lat: 39.915},
        zoom: 15,
        address:'',
        add:{jd:'',wd:''}
      }
    },
    methods: {
      handler ({BMap, map}) {
				let _this = this;	// 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r){
					console.log(r);
					_this.center = {lng: r.longitude, lat: r.latitude};		// 设置center属性值
					_this.autoLocationPoint = {lng: r.longitude, lat: r.latitude};		// 自定义覆盖物
					_this.initLocation = true;	
					console.log('center:', _this.center)	// 如果这里直接使用this是不行的
				},{enableHighAccuracy: true})
      },
      /***
       * 地图点击事件。
       */
      getClickInfo (e) {
        this.center.lng = e.point.lng;
        this.center.lat = e.point.lat;
        this.add.jd = e.point.lng;
        this.add.wd = e.point.lat;
        this.zoom = e.target.getZoom()
    
        let geocoder= new BMap.Geocoder();  //创建地址解析器的实例
        geocoder.getLocation(e.point,rs=>{
        this.add.site = rs.address;
        this.keyword=rs.address;
        });
      },
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
        this.zoom = e.target.getZoom()
      },
      /***
       * 确认
       */
      confirm () {
        console.log(this.center.lat);
        var point = new BMap.Point( this.center.lng, this.center.lat);
        console.log(point);
         var gc = new BMap.Geocoder();
        gc.getLocation(point, function(rs){
          var addComp = rs.addressComponents; console.log(rs.address);//地址信息
          console.log(rs.address);
        })
      },
      
      cancel () {
        this.showMapComponent = false
      }
    }
  }
</script>
 
<style scoped>
.serachinput{
  width: 300px;
  box-sizing: border-box;
  padding: 9px;
  border: 1px solid #dddee1;
  line-height: 20px;
  font-size: 16px;
  height: 38px;
  color: #333;
  position: relative;
  border-radius: 4px;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
}
</style>