FROM node:slim AS build

WORKDIR /client

COPY package*.json ./ 

RUN npm ci  

COPY . . 

RUN npm run build

FROM node:slim

WORKDIR /app 

RUN npm install -g serve 

COPY --from=build /client/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"] 

# iam using the top one cuz openshift is not working so i switch to this simple 

# # Step 1: Build the React app
# FROM node:slim AS build
#
# WORKDIR /client
#
# # Copy package.json and package-lock.json (or yarn.lock) to install dependencies
# COPY package*.json ./
#
# # Install dependencies
# RUN npm ci 
#
# # i will be fine cuz i already have  dockerignore so it will not be loaded  
# COPY . .
#
# # Build the React app for production
# RUN npm run build
#
# # Step 2: Serve the app using NGINX
# FROM nginx:alpine
#
# # Remove the default nginx config
# RUN rm /etc/nginx/conf.d/default.conf
#
# RUN mkdir -p /var/cache/nginx /var/run/nginx /var/log/nginx && \
#   chown -R 101:101 /var/cache/nginx /var/run/nginx /var/log/nginx && \
#   chmod -R 777 /var/cache/nginx /var/run/nginx /var/log/nginx
#
# # i should use 101 for nginx otherwise openshift is gonna fuck me to death :)
# RUN chown -R 101:101 /etc/nginx/conf.d && \
#   chmod -R 777 /etc/nginx/conf.d
#
# # Copy the custom nginx.conf into the container
# COPY ./nginx.conf /etc/nginx/nginx.conf
#
# # Copy the built React app from the previous stage into NGINX's public directory
# COPY --from=build /client/dist  /usr/share/nginx/html
#
# # Expose port 80 (default HTTP port)
# EXPOSE 80
#
# USER 101
#
# # Start NGINX when the container is run
# CMD ["nginx", "-g", "daemon off;"]
#
# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl http://localhost:80
