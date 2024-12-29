import { Options } from 'swagger-jsdoc'

export const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Meine API',
      version: '1.0.0',
      description: 'Beschreibung deiner API',
    },
    // Optional: servers, components, security, usw.
  },
  // Quelle(n) für deine JSDoc/TypeScript-Deklarationen
  apis: [
    './src/routes/**/*.ts',   // <-- falls du hier JSDoc-Kommentare verwendest
  ],
}
