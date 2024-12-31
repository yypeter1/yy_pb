Page({
    data: {
      phone: '',
      code: '',
      name: '',
      studentId: '',
      password: '',
      confirmPassword: ''
    },
  
    onPhoneInput: function(e) {
      this.setData({
        phone: e.detail.value
      });
    },
  
    onCodeInput: function(e) {
      this.setData({
        code: e.detail.value
      });
    },
  
    onNameInput: function(e) {
      this.setData({
        name: e.detail.value
      });
    },
  
    onStudentIdInput: function(e) {
      this.setData({
        studentId: e.detail.value
      });
    },
  
    onPasswordInput: function(e) {
      this.setData({
        password: e.detail.value
      });
    },
  
    onConfirmPasswordInput: function(e) {
      this.setData({
        confirmPassword: e.detail.value
      });
    },
  
    onGetCode: function() {
      // 模拟获取验证码的逻辑
      wx.showToast({
        title: '验证码已发送',
        icon: 'success'
      });
    },
  
    onRegister: function() {
      const { phone, code, name, studentId, password, confirmPassword } = this.data;
  
      if (!phone || !code || !name || !studentId || !password || !confirmPassword) {
        wx.showToast({
          title: '请填写完整信息',
          icon: 'none'
        });
        return;
      }
  
      if (password !== confirmPassword) {
        wx.showToast({
          title: '密码不一致',
          icon: 'none'
        });
        return;
      }
  
      // 模拟注册成功
      wx.showToast({
        title: '注册成功',
        icon: 'success'
      });
  
      // 清空表单
      this.setData({
        phone: '',
        code: '',
        name: '',
        studentId: '',
        password: '',
        confirmPassword: ''
      });
    }
  });
  