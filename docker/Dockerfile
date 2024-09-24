FROM node:22
LABEL authors="Quan Pham Van"

ENV root-app="/var/www/employee-roll"

WORKDIR $root-app

COPY . .

EXPOSE 3001
ENTRYPOINT ["npm", "start"]