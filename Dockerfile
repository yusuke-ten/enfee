FROM node:12.2.0-alpine
RUN mkdir /frontend-app
WORKDIR /frontend-app
COPY package*.json /frontend-app

ENV PATH /frontend-app/node_modules/.bin:$PATH

RUN yarn install --silent
COPY . /frontend-app

CMD ["yarn", "start"]
