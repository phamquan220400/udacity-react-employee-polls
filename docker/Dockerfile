FROM node:22
LABEL authors="Quan Pham Van"

ENV root_app="/var/www/employee-roll"

WORKDIR $root_app

COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]