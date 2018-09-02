//index.js
const app = getApp()
var sliderWidth = 96;

Page({
  
    data: {
      // tab切换  
      currentTab: 0,
      actionSheetHidden: true,
      actionSheetItems: ['创建课程', '加入课程'],
      //上拉菜单参数
      hideModal: true, //模态框的状态 true-隐藏 false-显示 
      animationData: {},  
    },
//导航条
    swichNav: function (e) {
      //console.log(e);
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current,
        })
      }
    },

    swiperChange: function (e) {
      //console.log(e);
      this.setData({
        currentTab: e.detail.current,
      })
    },


  actionSheetTap: function(e) {
    //console.log(this);
    this.setData({
      //取反
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },

  actionSheetChange: function(e) { //change事件 取消菜单
    console.log(e);
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
//导航条结束
//+触发上拉菜单
  bindItemTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
    if (e.currentTarget.dataset.name == '创建课程'){
      wx.navigateTo({
        url: '../classCreate/classCreate',
      });
      wx.redirectTo({
        url: '../index/index',
      })
    } else if (e.currentTarget.dataset.name == '加入课程'){
      this.showModal();
    }
  },
//加入课程触发上拉菜单
  // 显示遮罩层 
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 600, //动画的持续时间 默认400ms 数值越大，动画越慢 数值越小，动画越快 
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn(); //调用显示动画 
    }, 200)
  },
  // 隐藏遮罩层 
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800, //动画的持续时间 默认400ms 数值越大，动画越慢 数值越小，动画越快 
      timingFunction: 'ease', //动画的效果 默认值是linear 
    })
    this.animation = animation
    that.fadeDown(); //调用隐藏动画
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 720) //先执行下滑动画，再隐藏模块
  },
  //动画集 
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },
  fadeDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
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