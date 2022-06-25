// index.js
Page({
    data:{
        hh:"展示号码"
    },
    getNum:function(){
        return new Promise((resolve,reject)=>{
        wx.request({
            url: 'http://172.18.10.145:2022/index/getNumber',
            method:'GET',
            success:(res)=>{
              console.log(res.data)
              this.setData({
                  hh:res.data
              })
            },
            fail:(error)=>{	
              console.log("调用失败")
            }
})
})
    }
})
