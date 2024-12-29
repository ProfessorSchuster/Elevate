# Offizielles Node.js-Image verwenden
FROM node:18

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Package-Dateien kopieren
COPY package.json package-lock.json ./

# Abhängigkeiten installieren
RUN npm install

# Alle restlichen Dateien kopieren
COPY . .

# Standardport des Containers
EXPOSE 3000

# Startbefehl für Vite
CMD ["npm", "run", "dev"]
