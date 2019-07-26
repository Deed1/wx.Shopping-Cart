// pages/consumer/consumer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //窗口的宽高
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    //获取登录后的信息
    //判断是否登录
    access_token:'',
    user:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /** 
     * 获取系统信息 
     */
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    })
    this.getUser();
  },

   /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({currentTab: e.detail.current});
  },
 /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
//获取登录后的信息并判断是否登录
  getUser(){
    var that = this
    var token_type = wx.getStorageSync('token_type')
    var access_token = wx.getStorageSync('access_token')
    that.setData({ access_token: access_token })
    if (access_token) {
      wx.request({
        url: 'https://itfun.tv/api/v1/users/me.json',
        header: {
          Accept: 'application/json',
          'Authorization': `${token_type} ${access_token}`,
        },
        success: res => {
          console.log(res);
          this.setData({
            user: res.data.user
          })
        },
      });
    } else {
      return false
    }
  },
  //点击退出
  Btn(){
    wx.showModal({
      title: '提示',
      content: '再见了您嘞',
      success: res=> {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.removeStorageSync('token_type')
          wx.removeStorageSync('access_token')
          this.getUser()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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
    this.getUser();
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