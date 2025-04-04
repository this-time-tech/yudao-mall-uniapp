# 生产阶段
FROM registry.cn-hangzhou.aliyuncs.com/one-registry/nginx:latest

# 设置工作目录
WORKDIR /app

# 将前端构建输出复制到 Nginx 默认的 html 目录
COPY ./unpackage/dist/build/web /html

# 复制自定义的 Nginx 配置文件
COPY docker_nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
