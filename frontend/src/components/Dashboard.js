import React, { useState, useEffect } from 'react';
import { Layout, Menu, Card, Avatar, Statistic, Row, Col, Button, Typography, message } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  DashboardOutlined,
  SettingOutlined,
  BellOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const Logo = styled.div`
  height: 64px;
  padding: 16px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background: #1890ff;
`;

const StyledHeader = styled(Header)`
  background: white;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ContentArea = styled(Content)`
  margin: 24px;
  padding: 24px;
  background: white;
  border-radius: 8px;
`;

const StyledCard = styled(Card)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  
  .ant-card-head {
    border-bottom: none;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userStr));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    message.success('退出登录成功');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <StyledLayout>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        theme="light"
      >
        <Logo>
          {collapsed ? 'UD' : 'User Dashboard'}
        </Logo>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: '仪表板'
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: '个人信息'
            },
            {
              key: '3',
              icon: <SettingOutlined />,
              label: '设置'
            },
            {
              key: '4',
              icon: <BellOutlined />,
              label: '通知'
            }
          ]}
        />
      </Sider>
      
      <Layout>
        <StyledHeader>
          <Title level={4} style={{ margin: 0 }}>欢迎回来</Title>
          <UserInfo>
            <Avatar size="large" icon={<UserOutlined />} />
            <div>
              <Text strong>{user.username}</Text>
              <br />
              <Text type="secondary">{user.email}</Text>
            </div>
            <Button 
              type="link" 
              icon={<LogoutOutlined />}
              onClick={handleLogout}
            >
              退出登录
            </Button>
          </UserInfo>
        </StyledHeader>
        
        <ContentArea>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <StyledCard title="账户信息">
                <Statistic
                  title="用户名"
                  value={user.username}
                  prefix={<UserOutlined />}
                />
              </StyledCard>
            </Col>
            <Col span={8}>
              <StyledCard title="邮箱">
                <Statistic
                  value={user.email || '未设置'}
                />
              </StyledCard>
            </Col>
            <Col span={8}>
              <StyledCard title="账户状态">
                <Statistic
                  value="正常"
                  valueStyle={{ color: '#52c41a' }}
                />
              </StyledCard>
            </Col>
          </Row>

          <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
            <Col span={24}>
              <StyledCard title="最近活动">
                <Text>暂无活动记录</Text>
              </StyledCard>
            </Col>
          </Row>
        </ContentArea>
      </Layout>
    </StyledLayout>
  );
};

export default Dashboard; 