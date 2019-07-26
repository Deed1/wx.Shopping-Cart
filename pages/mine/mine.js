// pages/mine/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    buttonData:['登录','注册'],
    currentIndex:0,
    items: [
      {name: '男',value: '1'},
      {name: '女',value: '2'},
      {name: '隐藏',value: '3'},
    ],
  },
  //切换页面
  change(e) {
    console.log(e)
    this.setData({
      currentIndex:e.currentTarget.dataset.index,
    })
  },
  //点击跳转首页
  jump(e) {
    console.log(e)
    wx.switchTab({
      url: '../index/index'
    })
  },
  //登录
  formSubmit(e) {
    console.log(e);
    let data={
      grant_type: 'password',
      client_id: 'c60de69e571fae852bea53e347a2be36503ebba84247a054cb7eb6549d161ac9',
      client_secret: 'd8491d666ee8749bc348eb25035ed0195dbd6cff586327ba9304013eb0d92734',
      username: e.detail.value.name,
      password: e.detail.value.password
    };
    wx.request({
      url: 'https://itfun.tv/oauth/token',
      data: data,
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        wx.setStorageSync('token_type',result.data.token_type),
        wx.setStorageSync('access_token',result.data.access_token)
        wx.showModal({
          title: '这是一条提示',
          content: '拜拜了您嘞',
          success (res) {
            if (result.statusCode == 200) {
                wx.switchTab({
                  url:'../consumer/consumer'
                });
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
//注册
  formRecord(e) {
    console.log(e);
    var data={
      user: {
        last_name: e.detail.value.last_name,
        first_name: e.detail.value.first_name,
        email: e.detail.value.email,
        password: e.detail.value.password,
        sex: e.detail.value.sex ? e.detail.value.sex:3
      }
    };
    wx.request({
      url: 'https://itfun.tv/api/v1/users.json',
      data: data,
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result) =>{
        console.log(result);
        wx.setStorageSync('token_type', result.data.token_type),
        wx.setStorageSync('access_token', result.data.access_token)
        wx.showModal({
          title: '这是一条提示',
          content: '注册成功',
          success (res) {
            if (result.statusCode == 200) {
                wx.switchTab({
                  url:'../consumer/consumer'
                });
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})