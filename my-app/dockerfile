# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /my-app
COPY package*.json ./
RUN npm install
COPY . .


ARG REACT_APP_URL
ENV REACT_APP_URL=$REACT_APP_URL

RUN npm run build


FROM nginx:alpine
COPY --from=build /my-app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
