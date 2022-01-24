FROM node:16.13.1 as node

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install --legacy-peer-deps

COPY . /usr/src/app

RUN npm run build --prod

FROM nginx:1.20.2-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=node /usr/src/app/dist/landrick-angular/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
