<template>
	<view class="tab1">
		<Scorll v-on:pulldown="pulldown" v-on:reachbottom="reachbottom">
			<!-- 刷新动画 -->
			<view class="pulldown-loadng" slot="pulldown">
				<view class="loading-icon-text">
				  <image class="loadingImg"  src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/jmx_skin/components/emotion/love2.png"></image>
				 123...
				</view>
			</view>
			<!-- 内容 -->
			<view slot="content">
				<view class="list" v-for="(t,i) in arr" :key="i" @click="aaa">
					{{i}}
				</view>
			</view>
			<!-- 预留空位 -->
			<view slot="empty" class="empty"></view>
		</Scorll>
	</view>
</template>

<script>
	import Scorll from "../../component/scorll.vue"
	export default{
		data(){
			return {
				arr:[]
			}
		},
		methods:{
			async pulldown(e){//刷新
				let {stop}=e;
				setTimeout(()=>{
					stop()//结束
				},500)
			},
      aaa(){
        console.log(getApp())
      },
      async listEvent(e){
        await this.request({
          path:"/operate/AdPhoto/main",
        });
      },
			reachbottom(e){//加载
				let {stop}=e;
				setTimeout(()=>{
					stop()
				},1000)
			},
		},
		created() {
      
			var arr=[],that=this;
			for(let i=0;i<50;i++){
				arr.push(i)
			};
			this.arr=arr;
			// // #ifdef MP-WEIXIN
			// 	wx.cloud.init();
			// 	wx.cloud.callFunction({
			// 		name: 'demo',
					
			// 	}).then(res=>{
			// 		console.log(res)
			// 	}).catch(err=>{
			// 		console.log(err)
			// 	})
			// // #endif
			
		},
		components:{
			Scorll
		}
	}
</script>

<style>
	.empty{
		height: 100rpx;
	}
	.list{
		padding: 10px;
		margin-top: 10px;
		background: #00aa7f;
	}
	/* 刷新动画 */
	
	.pulldown-loadng {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background:#efefef;
	}
	
	.loading-icon {
	  width: 200rpx;
	  height: 200rpx;
	}
	.loading-icon-text{
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  font-size: 30rpx;
	  color: #D61313;
	  width: 100%;
	  font-weight: bold;
	  height: 150rpx;
	}
	.loading-icon-text image{
	  width: 40rpx;
	  height: 37rpx;
	  margin-right: 10rpx;
	}
	
	@keyframes loadingImg{
	  0%{
	    transform: rotate(0deg);
	  }
	  100%{
	    transform: rotate(360deg);
	  }
	}
	.loadingImg{
	  animation: loadingImg .5s linear infinite;
	}
</style>
