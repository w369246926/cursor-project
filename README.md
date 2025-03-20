# Spring Boot + React 用户认证系统

一个基于 Spring Boot 和 React 的现代化用户认证系统，包含用户注册、登录和个人仪表板功能。

## 技术栈

### 后端
- Spring Boot 2.7.0
- Spring Data JPA
- PostgreSQL
- Docker

### 前端
- React 18
- Ant Design 4.24.0
- Styled Components
- Axios
- React Router DOM

## 项目结构 

## API 端点

### 用户认证
- POST `/api/users/register` - 用户注册
- POST `/api/users/login` - 用户登录

## 开发指南

### 项目结构
├── src/ # 后端源代码
│ └── main/
│ ├── java/
│ │ └── com/example/
│ │ ├── config/ # 配置文件
│ │ ├── controller/ # 控制器
│ │ ├── entity/ # 实体类
│ │ ├── repository/ # 数据访问层
│ │ ├── service/ # 服务层
│ │ └── UserAuthApplication.java
│ └── resources/
│ └── application.yml # 应用配置
├── frontend/ # 前端源代码
│ ├── src/
│ │ ├── components/ # React 组件
│ │ ├── App.js # 主应用组件
│ │ ├── App.css # 全局样式
│ │ ├── index.js # 入口文件
│ │ └── index.css # 入口样式
│ ├── public/ # 静态资源
│ └── package.json # 前端依赖配置
├── docker/ # Docker 相关文件
├── docker-compose.yml # Docker Compose 配置
├── init.sql # 数据库初始化脚本
└── pom.xml # Maven 配置文件

### 前端开发
- 前端服务运行在 `http://localhost:3000`
- 使用 Ant Design 组件库
- 使用 Styled Components 进行样式管理
- 使用 Axios 进行 API 调用

### 后端开发
- 后端服务运行在 `http://localhost:8082`
- 使用 Spring Data JPA 进行数据访问
- 使用 PostgreSQL 作为数据库
- 已配置 CORS 支持前端访问

## 注意事项

1. 确保 Docker 已经安装并运行
2. 确保 PostgreSQL 端口 (5432) 未被占用
3. 前端开发需要 Node.js 环境
4. 后端开发需要 JDK 17 或以上版本

## 待优化项

- [ ] 添加用户密码加密
- [ ] 实现 JWT 认证
- [ ] 添加用户头像上传
- [ ] 实现更多的仪表板功能
- [ ] 添加单元测试
- [ ] 优化错误处理机制
- [ ] 添加日志系统
- [ ] 实现用户信息编辑功能

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

[MIT License](LICENSE)

## 功能特性

- 用户认证
  - 用户注册
  - 用户登录
  - 表单验证
  - 错误处理
- 个人仪表板
  - 用户信息显示
  - 账户状态
  - 响应式侧边栏
  - 最近活动记录

## 快速开始

### 1. 克隆仓库

```bash
git clone <repository-url>
cd user-auth-demo
```

### 2. 启动后端

#### 启动数据库
```bash
docker-compose up -d
```

#### 运行 Spring Boot 应用
```bash
# Windows
.\mvnw.cmd spring-boot:run

# Linux/Mac
./mvnw spring-boot:run
```

### 3. 启动前端
```bash
cd frontend
npm install
npm start
```

## 配置说明

### 后端配置 (application.yml)
```yaml
server:
  port: 8082
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/userdb
    username: postgres
    password: postgres
```

### 数据库配置 (docker-compose.yml)
```yaml
services:
  postgres:
    image: postgres:13
    environment:
      POSTGRES_DB: userdb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
``` 