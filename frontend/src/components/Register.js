import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:8082/api/users/register', values);
      if (response.data) {
        message.success('注册成功！');
        navigate('/login');
      }
    } catch (error) {
      message.error(error.response?.data || '注册失败');
    }
  };

  return (
    <div className="auth-form">
      <h2 className="auth-form-title">用户注册</h2>
      <Form
        name="register"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="密码" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: '请输入邮箱！' },
            { type: 'email', message: '请输入有效的邮箱地址！' }
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="邮箱" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button">
            注册
          </Button>
        </Form.Item>
        <div className="auth-form-footer">
          已有账号？ <Link to="/login">立即登录</Link>
        </div>
      </Form>
    </div>
  );
};

export default Register; 