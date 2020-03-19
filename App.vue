<script>
  import {config} from "@/utils/config.js"
	export default {
		data(){
			return {
				name:1
			}
		},
		async created() {
			//#ifdef MP-WEIXIN
			wx.cloud.init();
			//#endif
      let users=await this.login();
      
      console.log(users)
		},
		
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
    methods:{
      async login(){
        return new Promise((reslove,reject)=>{
          uni.login({
            success:(res)=> {
              uni.request({
                url:`${config.apiHost}/wx/wxLogin`,
                data:{
                  code:res.code
                },
                method:"POST",
                header:{},
                success:(result)=>{
                  let obj=result.data,
                  token=obj.data.token;
                  uni.setStorageSync("token",token);
                  this.globalData.userInfo={...obj.data};
                  
                }
              });
            }
          })
        })
      }
    }
	}
</script>

<style>
	/*每个页面公共css */
  view{
    box-sizing: border-box;
  }
</style>
