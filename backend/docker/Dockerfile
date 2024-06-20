FROM node:20.11-alpine3.19
ENV NODE_ENV dev
WORKDIR /app

COPY ./backend/package*.json .

RUN npm install

COPY ./backend .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]