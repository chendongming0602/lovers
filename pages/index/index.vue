<template>
	<view >
		<view class=""  v-show="tabCount===0">
			<Tab1 v-if="tabArr[0]"></Tab1>
		</view>
		<view class=""v-show="tabCount===1">
			<Tab2 v-if="tabArr[1]"  ></Tab2>
		</view>
		
		<Tab v-on:tabs="tabs"   :tabCount="tabCount"></Tab>
	</view>
</template>

<script>
	import Tab from "../../component/tab.vue";
	import Tab1 from "../tabs/tab1.vue";
	import Tab2 from "../tabs/tab2.vue";
	export default {
		data() {
			return {
				title: 'Hello',
				tabCount:0,
				tabArr:[
					false,
					false,
					
				]
			}
		},
		created() {
      this.tabArr[this.tabCount]=true;
    
		},
		methods: {
			 tabs(e){//子组件触发
				this.tabCount=e;
				this.tabArr[e]=true
			 },
			 
		},
		components:{
			Tab,
			Tab1,
			Tab2
		}
	}
</script>

<style>
	
</style>
