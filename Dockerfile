FROM nginx:1.17.1-alpine
EXPOSE 80
COPY /dist/school-management-system /usr/share/nginx/html