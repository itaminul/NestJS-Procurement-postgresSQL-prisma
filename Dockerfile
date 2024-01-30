FROM node:16.16.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma generate
CMD ["npm", "run", "start:dev"]

# RUN npm run build

# EXPOSE 8080

# CMD [ "node", "dist/main"]