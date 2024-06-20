FROM node:20.11-alpine3.19
WORKDIR /app
COPY ./frontend/package.json .
RUN npm install
COPY ./frontend .
EXPOSE 3000
CMD ["npm", "start"]