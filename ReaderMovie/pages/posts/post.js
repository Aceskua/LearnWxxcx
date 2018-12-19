var postsData=require('../../data/posts-data.js')//只能用相对路径，用绝对路径会报错

Page({

  /**
   * 页面的初始数据
   */
  data: {   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      posts_key: postsData.postList
    });
  },

  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,
    })
  }
})