import express from 'express';
import authRoutes from './auth/auth.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger/swagger-config';

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();
app.use(express.json());

// Swagger-Doku
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use('/auth', authRoutes);

// Beispiel-Routen
app.get('/', (req, res) => {
  res.send('Hello, Elevate!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. Docs at http://localhost:${PORT}/docs`);
});