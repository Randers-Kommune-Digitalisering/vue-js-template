FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy project files and folders to the current working directory
COPY . .

# install project dependencies
RUN cd vue && npm install

# build app for production with minification
RUN cd vue && npm run build

RUN cp -r vue/dist dist

RUN rm -rf vue

# install project dependencies
RUN cd express && npm install

# Run express server
RUN cd express && npm ci --only=production

CMD [ "node", "express/server.js" ]