Page({
    onRegister: function () {
        wx.navigateTo({
          url: '/pages/student_register/student_register'
        });
    },
    data: {
      username: '',
      password: ''
    },
  
    // 处理用户名输入
    onUsernameInput: function(event) {
      this.setData({
        username: event.detail.value
      });
    },
  
    // 处理密码输入
    onPasswordInput: function(event) {
      this.setData({
        password: event.detail.value
      });
    },
  
    // 登录按钮点击事件
    onLogin: function() {
      const { username, password } = this.data;
  
      if (!username || !password) {
        wx.showToast({
          title: '用户名或密码不能为空',
          icon: 'none'
        });
        return;
      }
  
      // 模拟登录请求
      wx.showToast({
        title: '登录中...',
        icon: 'loading',
        duration: 1500
      });
  
      // 假设登录成功
      setTimeout(() => {
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        });
        // 跳转到首页或其他页面
        wx.redirectTo({
          url: '/pages/student_ketang/student_ketang'
        });
      }, 1500);
    }
  });
  