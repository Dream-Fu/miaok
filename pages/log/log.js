// pages/usercenter/usecenter.js
// const url_microService = require('../common/config').url_microService;

Page({
  data: {
    email: '',
    password: ''
  },

  login(e) {
    wx.showToast({
      title: '登陆请求中',
      icon: 'loading',
      duration: 3000
    })
    // wx.request({
    //   url:  //'https://api.gugujiankong.com/account/Login?email=' + this.data.email + '&password=' + this.data.password,
    //   method: 'GET',
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success(res) {
    //     console.log(res.data);
    //     wx.hideToast();
    //     if(res.data.LoginStatus == 1) {
    //       //登陆成功
    //     } else {
    //       wx.showModal({
    //         title: '登陆失败',
    //         content: '请检查您填写的信息',
    //         showCancel: false,
    //         success(res) {
    //           //huidiaohanshu
    //         }
    //       });
    //    }
    //  }
    //})
    //登陆成功 跳转
    wx.switchTab({
      url: '../../pages/index/index',
      success() {
        console.log("called switch tab")
      }
    })
  },
  mailphoneInput(e) {
    this.setData({
      email: e.detail.value
    })
  },
  passwordInput(e) {
    this.setData({
      password: e.detail.value
    })
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '转发喵课堂给童鞋使用吧~',
      path: '/page/index/index'
    }
  }
})