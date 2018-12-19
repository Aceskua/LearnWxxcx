var postsData = require('../../../data/posts-data.js') //只能用相对路径，用绝对路径会报错

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postId = options.id;
    var postData = postsData.postList[postId];
    //如果在onLoad方法中，不是异步的去执行一个数据绑定
    //则不需要使用this.setData方法
    //只需要对this.Data赋值即可实现数据绑定
    // this.data.postData = postData;
    //新版中，上述方法已不能使用
    this.setData({
      postData: postData
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})