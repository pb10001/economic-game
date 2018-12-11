FROM node:10-alpine

WORKDIR /app
COPY . /app

RUN npm install -g @vue/cli && \
    npm install && \
    npm run build
CMD ["bin/sh"]