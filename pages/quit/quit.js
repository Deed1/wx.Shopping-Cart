// pages/quit/quit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
Quit(){
  wx.showModal({
    title: '提示',
    content: '再见了您嘞',
    success: res => {
      if (res.confirm) {
        console.log('用户点击确定')
        wx.removeStorageSync('token_type')
        wx.removeStorageSync('access_token')
        wx.switchTab({
          url: '../index/index'
        })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
},
tapname(){
  wx.switchTab({
    url: '../index/index'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUser();
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