import jwt from 'jsonwebtoken';
import { env } from '../../config/env.js';


export function signAccessToken(user) {
    return jwt.sign({ sub: String(user._id), role: user.role }, env.accessSecret, {
        expiresIn: `${env.accessMinutes}m`,
    });
}
