# Use official Node image
FROM node:22-alpine

# Set working directory
WORKDIR /backend

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose your backend port (e.g., 5000)
EXPOSE 5000

# Start the server
CMD ["node", "Server.js"]
