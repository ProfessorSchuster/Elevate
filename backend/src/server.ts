import express from 'express';
import authRoutes from './auth/auth.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger/swagger-config';

// Swagger-Spezifikation generieren
const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();
app.use(express.json());

// Swagger-Dokumentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Authentifizierungs-Routen
app.use('/auth', authRoutes);

// Beispiel-Route
app.get('/', (req, res) => {
  res.send('Hello, Elevate!');
});

// Fehlerbehandlung (z. B. für nicht gefundene Routen)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Server starten
const PORT = process.env.BACKEND_PORT_HOST || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. Docs at http://localhost:${PORT}/docs`);
});
