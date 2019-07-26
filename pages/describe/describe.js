// pages/describe/describe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:[],
    chapters:[],
    teacher:[],
    relation_courses:[],
    photo:true,
    src:'../../img/bottom.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let id = options.id
    wx.request({
      url: `https://itfun.tv/api/v1/courses/${id}.json`,
      method: 'GET',
      success: (result)=>{
        console.log(result)
        this.setData({
          course:result.data.course,
          chapters:result.data.chapters,
          teacher:result.data.teacher,
          relation_courses:result.data.relation_courses
        })
      },
    });
  },
  tapname(){
    wx.switchTab({
      url: '../categories/categories'
    })
  },
  //判断点击展开和收起以及箭头图片的切换
  change(e){
    if(this.data.photo){
      this.setData({photo:false,src:'../../img/top.png'})
    }else{
      this.setData({photo:true,src:'../../img/bottom.png'})
    }
  },
  jump(e){
    console.log(e)
    if(e.currentTarget.dataset.publish===false){
      wx.showModal({
        title: '提示',
        content: '还未发布',
        success (res) {
          if (res.confirm) {
            wx.switchTab({
              url:'../categories/categories'
            })
          } else if (res.cancel) {

          }
        }
      })
    }else if(e.currentTarget.dataset.id){
      wx.navigateTo({
        url:`../video/video?id=${e.currentTarget.dataset.id}`
      })
    }
  },
  click(e){
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../describe/describe?id=${id}`
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