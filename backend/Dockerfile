# Offizielles Node.js-Image verwenden
FROM node:18

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Nur package.json kopieren
COPY package.json ./

# TypeScript-Abhängigkeiten installieren
RUN npm install --save-dev @types/node @types/express

# Alle restlichen Dateien kopieren (inkl. tsconfig.json und src)
COPY . .

# TypeScript builden
RUN npm run build

# Standardport des Containers
EXPOSE 5000

# Startbefehl für das Backend
CMD ["npm", "run", "start"]
