# Dockerfile für das Frontend
FROM --platform=linux/arm64 node:18-bullseye-slim

# Set working directory
WORKDIR /app

# Kopiere die package.json und installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den restlichen Code
COPY . .

# Baue die React-App
RUN npm run build

# Installiere den "serve"-Server für statische Dateien
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Starte die Anwendung
CMD ["npm", "run", "dev"]
