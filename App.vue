<script>
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
              return this.request({
                path:"/login/wxLogin",
                data:{
                  code:res.code
                },
                method:"POST"
              }).then(result=>{
                  let token=result.token;
                  uni.setStorageSync("token",token);
                  this.globalData.userInfo={...result};
              })
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
