FROM node:22-alpine as build

WORKDIR /backend

COPY package*.json ./ 

RUN npm ci 

COPY . . 

FROM node:22-alpine 

WORKDIR /backend

COPY --from=build /backend/node_modules ./node_modules

COPY --from=build /backend .

USER 1001

EXPOSE 5000

CMD ["node", "Server.js"] 

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl http://localhost:5000
