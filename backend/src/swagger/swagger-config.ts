import { Options } from "swagger-jsdoc";

export const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Elevate API",
      version: "1.0.0",
      description: "API-Dokumentation für das Elevate-Projekt",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Lokale Entwicklungsumgebung",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/**/*.ts"], // Scanne alle Dateien für Swagger-Kommentare
};
