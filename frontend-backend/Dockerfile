FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy source code into the container.
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]