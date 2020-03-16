<template>
	<view class="tabBox">
	 <view v-bind:class="tabCount!==i?'tabListColor':''" class="tabList" v-for="(t,i) in list" :key="i" @click="tabEvent(i)">
	    <image class="tabImg" v-bind:src="tabCount===i?t.url:t.urlNo"></image>
	    {{t.name}}
	  </view>
	</view>
</template>

<script>
	export default{
		props:["tabCount"],
		data(){
			return{
				list:[
				      {
				        name:"推荐",
				        url:"https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/slice/tab/t1.png",
				        urlNo:"https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/slice/tab/t0.png"
				      },
				      {
				        name:"广场",
				        url:"https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/slice/tab/g1.png",
				        urlNo:"https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/slice/tab/g0.png"
				      },
				      {
				        name:"消息",
				        url:"https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/slice/tab/w1.png",
				        urlNo:"https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/slice/tab/w0.png"
				      },
					  {
					    name:"我的",
					    url:"https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/slice/tab/w1.png",
					    urlNo:"https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/slice/tab/w0.png"
					  }
				    ],
				    count:0
			}
		},
		methods:{
			tabEvent(e){		
				this.$emit("tabs",e);//父组件
				// console.log(this.tabCount)
			},
			
			
		}
	}
</script>

<style>
	image{
	  display: block;
	}
	.tabBox{
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	  height: 96rpx;
	  background:#fff;
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	  box-shadow:0px -4rpx 8rpx 0rpx rgba(0,0,0,0.11);
	  z-index: 99;
	  left: 0rpx;
	}
	.tabList{
	  text-align: center;
	  font-size: 24rpx;
	  flex-grow: 1;
	  color: #D61313;
	}
	.tabImg{
	  width: 48rpx;
	  height: 48rpx;
	  margin: 0 auto;
	}
	.tabListColor{
	  color:rgba(191,191,191,1);
	}
</style>
