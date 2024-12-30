# backend/Dockerfile
FROM node:18-alpine

ENV NODE_ENV=development
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

RUN npm rebuild bcrypt || echo "Skipping bcrypt rebuild"

# Code reinkopieren
COPY . .

# Prisma Client generieren
RUN npx prisma generate

EXPOSE 5000
CMD ["npm", "run", "dev"]
