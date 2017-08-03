//index.js
//获取应用实例
var app = getApp()
const AV = require('../../utils/av-weapp-min.js');
const FML = require('../../model/fml.js');

Page({
  data: {
    userInfo: {},
    fmls: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'Le Wagon coding school',
      path: 'pages/index/index'
    }
  },
  onReady: function () {
    var that = this
    new AV.Query('FML')
      .descending('createdAt')
      .find()
      .then(fmls => that.setData({fmls}))
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
