// pages/categories/categories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName:[],
    slugs:[],
    courses:[],
    currentIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
  },
init(){
  wx.request({
    url: 'https://itfun.tv/api/v1/categories.json',
    data: {},
    header: { 'content-type': 'application/json' },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (result) => {
      console.log(result)
      let slugs = result.data.categories.map(item=>{
        return item.slug
      })
      this.setData({
        titleName:result.data.categories,
        slugs:slugs
      })
      let slug = this.data.slugs[this.data.currentIndex]
      wx.request({
        url: `https://itfun.tv/api/v1/categories/${slug}.json`,
        success: (result) => {
          console.log(result)
          this.setData({
            courses:result.data.courses,
          }) 
        },
      })
    },
  })
},
initCourses(){
  let slug = this.data.slugs[this.data.currentIndex]
  wx.request({
    url: `https://itfun.tv/api/v1/categories/${slug}.json`,
    success: (result) => {
      console.log(result)
      this.setData({
        courses:result.data.courses,
      }) 
    },
  })
},
swichNav(e){
  console.log(e)
  let index = e.currentTarget.dataset.index
  this.setData({
    currentIndex:index,
  })
  let slug = this.data.slugs[this.data.currentIndex]
  wx.request({
    url: `https://itfun.tv/api/v1/categories/${slug}.json`,
    success: (result) => {
      console.log(result)
      this.setData({
        courses:result.data.courses,
      }) 
    },
  })
},
jump(e){
  console.log(e)
  wx.navigateTo({
    url: '../news/news'
  })
},
tapname(){
  wx.navigateTo({
    url: '../quit/quit'
  })
},
link(e){
  console.log(e)
  let id=e.currentTarget.dataset.id
  wx.navigateTo({
    url:`../describe/describe?id=${id}`
  })
},
search(){
  wx.navigateTo({
    url: '../search/search'
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