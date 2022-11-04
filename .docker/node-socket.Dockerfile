FROM node:18

USER root

COPY ./socket /app

WORKDIR /app

RUN rm -rf node_modules && npm install

EXPOSE 7050
CMD [ "node", "/app/server.js" ]