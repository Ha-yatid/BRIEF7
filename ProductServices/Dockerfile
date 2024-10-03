FROM node:18
WORKDIR /app/productservice
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "start"]