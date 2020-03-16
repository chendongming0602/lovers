class All{
  constructor(arg) {
      
  }
  loadShow(title="加载中...",mask=true){
    uni.showLoading({
      title,
      mask
    })
  }
  toastShow(title="提示...",mask=false){
    uni.showToast({
      title,
      mask,
      icon:"none"
    })
  }
};
let Alls=new All();
module.exports={
  toastShow:Alls.toastShow,
  loadShow:Alls.loadShow
}