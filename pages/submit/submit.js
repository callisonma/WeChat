  // pages/submit/submit.js
const AV = require('../../utils/av-weapp-min.js');
const FML = require('../../model/fml.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  bindFormSubmit: function (e) {
   var name = e.detail.value.name
   var message = e.detail.value.message
   var acl = new AV.ACL();
   acl.setPublicReadAccess(true);
   acl.setPublicWriteAccess(true);
   setTimeout(function () {
     new FML({
       name: name,
       quote: message
     }).setACL(acl).save().catch(console.error);
     wx.reLaunch({
       url: '/pages/index/index'
     });
   }, 2000);
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