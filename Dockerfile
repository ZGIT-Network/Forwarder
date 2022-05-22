FROM node:18

# Create App Dir
WORKDIR /data/app

# Init Program
COPY package*.json ./

RUN npm install

COPY app.js ./

EXPOSE 8090

CMD [ "node", "app.js" ]




