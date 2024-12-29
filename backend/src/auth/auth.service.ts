import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

export const registerUser = async (email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const roleRecord = await prisma.role.findUnique({ where: { name: 'USER' } });
    if (!roleRecord) {
        throw new Error('Role not found');
    }

    return prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            roleId: roleRecord.id,
        },
    });
};

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email }, 
        include: { role: true }
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id, role: user.role.name }, JWT_SECRET, { expiresIn: '3h' });
    return { token, user };
};

export const getUserFromToken = async (token: string) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
        return prisma.user.findUnique({ where: { id: decoded.userId } });
    } catch {
        return null;
    }
};
