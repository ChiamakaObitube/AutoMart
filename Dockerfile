FROM node:14-slim

RUN apt-get update && apt-get upgrade -y \
    && apt-get clean

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
COPY .babelrc /app/
COPY .eslintrc.json /app/

RUN npm install

COPY server /app/server

EXPOSE 5000
CMD ["npm", "build"]

CMD [ "npm", "start" ]