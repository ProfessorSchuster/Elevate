import { Request, Response } from 'express';
import { registerUser, loginUser, getUserFromToken } from './auth.service';

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await registerUser(email, password);
        res.status(201).json({ message: 'User created', user });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
        res.status(400).json({ error: 'Unknown error' });
        }
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await loginUser(email, password);
        res.status(200).json({ token, user });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
        res.status(400).json({ error: 'Unknown error' });
        }
    }
};

export const me = async (req: Request, res: Response) => {
    try {
        const user = await getUserFromToken(req.headers.authorization?.split(' ')[1] || '');
        if (!user) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        res.status(200).json(user);
        return
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
