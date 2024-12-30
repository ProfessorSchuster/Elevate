import { Request, Response } from 'express';
import { registerUser, loginUser, getUserFromToken } from './auth.service';

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: "Benutzer registrieren"
 *     description: "Erstellt einen neuen Benutzer mit E-Mail und Passwort."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "securepassword123"
 *     responses:
 *       201:
 *         description: "Benutzer erfolgreich erstellt."
 *       400:
 *         description: "Fehler bei der Registrierung."
 */
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: "Benutzer-Login"
 *     description: "Authentifiziert einen Benutzer mit E-Mail und Passwort."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "securepassword123"
 *     responses:
 *       200:
 *         description: "Erfolgreich eingeloggt."
 *       400:
 *         description: "Ungültige Anmeldedaten."
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: "Benutzerprofil abrufen"
 *     description: "Ruft die Informationen des aktuellen Benutzers basierend auf dem Token ab."
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: "Benutzerprofil erfolgreich abgerufen."
 *       401:
 *         description: "Nicht autorisiert."
 *       500:
 *         description: "Interner Serverfehler."
 */
export const me = async (req: Request, res: Response) => {
  try {
    const user = await getUserFromToken(req.headers.authorization?.split(' ')[1] || '');
    if (!user) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
