CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255)
);

-- 插入测试数据
INSERT INTO users (username, password, email) 
VALUES 
    ('test1', 'password123', 'test1@example.com'),
    ('test2', 'password456', 'test2@example.com'); 