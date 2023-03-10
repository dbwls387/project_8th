FROM node:18.12.1 as build-stage
WORKDIR /var/jenkins_home/workspace/hot6/front-end
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /var/jenkins_home/workspace/hot6/front-end/dist /usr/share/nginx/html
COPY --from=build-stage /var/jenkins_home/workspace/hot6/front-end/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 
CMD ["nginx", "-g","daemon off;"]

