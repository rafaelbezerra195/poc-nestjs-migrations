# base stage
FROM node:16-alpine as base

WORKDIR /usr/src/app
COPY ./src ./src
COPY ["package.json", "package-lock.json", "nest-cli.json", "tsconfig.json", "tsconfig.build.json", ".eslintrc.js", "./"]
RUN npm install

# development ready stage
FROM base as dev

WORKDIR /usr/src/app
ENV NODE_ENV='development'
ENTRYPOINT ["npm", "run", "start:debug"]
