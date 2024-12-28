# Frontend Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Serve the built app
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port for the app
EXPOSE 3000
