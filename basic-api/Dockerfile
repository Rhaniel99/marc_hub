FROM node:lts-alpine

WORKDIR /api

COPY package*.json ./

# Mude temporariamente para o usuário root
# USER root

# Execute o npm install com permissões de root
RUN npm install && npm install -g nodemon

# Volte para o usuário não privilegiado
# USER node

COPY . .

EXPOSE 4001

CMD ["npm", "start"]
