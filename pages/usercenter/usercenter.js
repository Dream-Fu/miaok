Page({
  mySrc:function() {
    wx.navigateTo({
      url: '../mySrc/mySrc',
    });
    wx.redirectTo({
      url: '../usercenter/usercenter',
    })
  },
  myTest: function() {
    wx.navigateTo({
      url: '../myTest/myTest',
    });
    wx.redirectTo({
      url: '../usercenter/usercenter',
    })
  },
  userInfoEdit: function() {
    wx.navigateTo({
      url: '../userInfo/userInfo',
    });
    wx.redirectTo({
      url: '../usercenter/usercenter',
    })
  }
})