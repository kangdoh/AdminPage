# 🔹 1단계: Node.js에서 빌드
FROM node:latest AS builder
WORKDIR /app

# package.json과 package-lock.json을 복사 후 의존성 설치
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm install

# 프로젝트 소스 코드 복사 후 빌드
COPY . .
RUN npm run build

# 🔹 2단계: Nginx에서 정적 파일 서빙
FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 설정 복사 (옵션)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 컨테이너 포트 오픈
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
