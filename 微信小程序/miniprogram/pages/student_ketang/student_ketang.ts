
  Page({
    data: {
      showPopupFlag: false,  // 控制悬浮框显示与隐藏
      classId: ''  // 存储输入的班级编号
    },
  
    // 点击按钮显示悬浮框
    showPopup: function() {
      this.setData({
        showPopupFlag: true
      });
    },
  
    // 获取输入框中的班级编号
    onClassIdInput: function(e) {
      this.setData({
        classId: e.detail.value
      });
    },
  
    // 加入班级
    joinClass: function() {
      if (!this.data.classId) {
        wx.showToast({
          title: '请输入班级编号',
          icon: 'none'
        });
        return;
      }
  
      // 在这里可以加入加入班级的逻辑
      wx.showToast({
        title: `已加入班级`,
        icon: 'success'
      });
  
      // 隐藏悬浮框
      this.setData({
        showPopupFlag: false
      });
    }
  });
  
  