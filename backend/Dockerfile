FROM node:22-alpine

WORKDIR /

COPY package*.json ./ 

RUN npm install 

COPY . . 

EXPOSE 5000

CMD ["node", "Server.js"]
