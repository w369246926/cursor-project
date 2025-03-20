import React from 'react';
import { Form, Input, Button, message, Card, Typography, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const { Title } = Typography;

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  .ant-card-body {
    padding: 40px;
  }
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 24px;
  
  img {
    height: 48px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 16px;
`;

const StyledDivider = styled(Divider)`
  margin: 24px 0;
`;

const Footer = styled.div`
  text-align: center;
  color: #8c8c8c;
  
  a {
    color: #1890ff;
    &:hover {
      color: #40a9ff;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8082/api/users/login', values);
      if (response.data) {
        message.success('登录成功！');
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/dashboard');
      }
    } catch (error) {
      message.error(error.response?.data || '登录失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <StyledCard>
        <Logo>
          <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
            用户登录
          </Title>
        </Logo>
        
        <Form
          name="login"
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: '请输入用户名！' },
              { min: 3, message: '用户名至少3个字符！' }
            ]}
          >
            <Input
              prefix={<UserOutlined style={{ color: '#1890ff' }} />}
              placeholder="用户名"
              autoComplete="username"
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码！' },
              { min: 6, message: '密码至少6个字符！' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: '#1890ff' }} />}
              placeholder="密码"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <StyledButton
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              登录
            </StyledButton>
          </Form.Item>
        </Form>

        <StyledDivider>或者</StyledDivider>

        <Footer>
          还没有账号？ <Link to="/register">立即注册</Link>
        </Footer>
      </StyledCard>
    </LoginContainer>
  );
};

export default Login; 