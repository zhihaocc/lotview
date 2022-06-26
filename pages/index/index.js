// index.js
Page({
    data:{
        hh:""
    },
    getNum:function(){
        return new Promise((resolve,reject)=>{
        wx.request({
            url: 'http://127.0.0.1:2022/index/getNumber',
            method:'GET',
            data:{"type":2,"listNum":1},
            dataType:"json",
            success:(res)=>{
              this.setData({
                  hh:res.data.data
              })
            },
            fail:(error)=>{	
              console.log("调用失败")
            }
})
})
    }
})
