# Step 1: Build the React app
FROM node:22-alpine AS build

WORKDIR /client

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the app using NGINX
FROM nginx:alpine

# Remove the default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom nginx.conf into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built React app from the previous stage into NGINX's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default HTTP port)
EXPOSE 80

# Start NGINX when the container is run
CMD ["nginx", "-g", "daemon off;"]
