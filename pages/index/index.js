Page({
  data: {
    //轮播图数据
    slide_courses:[],
    section:[],
    section_two:[],
    section_three:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  //获取轮播图
  onLoad:function(){
  wx.request({
      url: 'https://itfun.tv/api/v1/home.json',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result)
        this.setData({
          slide_courses:result.data.slide_courses,
          section:result.data.new_courses,
          section_two:result.data.likes_courses,
          section_three:result.data.recommended_courses,
        }) 
      },
    })
  },
  jump(){
    wx.navigateTo({
      url: '../quit/quit'
    })
  },
  tapname(){
    wx.navigateTo({
      url: '../news/news'
    })
  },
  search(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  link(e){
    console.log(e)
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url:`../describe/describe?id=${id}`
    })
  },
  click(e){
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../describe/describe?id=${id}`
    })
  }
})