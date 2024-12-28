# Dockerfile für das Backend
FROM node:18

# Set working directory
WORKDIR /app

# Kopiere die package.json und installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den restlichen Code
COPY . .

# Baue den TypeScript-Code
RUN npm run build

# Expose port 5000
EXPOSE 5000

# Starte die Anwendung
CMD ["npm", "start"]
