// pages/video/video.js
const app = getApp();
var is_1_height;
Page({

  /**
   * 页面的初始数据
   */
  data: {
     //窗口的高
    winWidth:0,
    winHeight: 0,
    video:[],
    list_name:[],
    list:[],
    article:{},
    height:{},
    photo:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let id = options.id;
    const _ts = this;
   wx.request({
      url: `https://itfun.tv/api/v1/chapters/${id}.json`,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result)
        this.setData({
          video : result.data.chapter,
          list_name:result.data.course,
          list:result.data.chapters
        })
        let data = app.towxml.toJson(
            result.data.chapter.body,               // `markdown`或`html`文本内容
            'markdown'              // `markdown`或`html`
        );
          _ts.setData({
            article: data
        });
      },
    })
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    })
  },
  click(e){
    console.log(e)
    if(this.data.photo){
      this.setData({photo:false})
    }else{
      this.setData({photo:true})
    }
  },
  cancel(){
    this.setData({photo:false})
  },
  jump(e){
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url:`../video/video?id=${id}`
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