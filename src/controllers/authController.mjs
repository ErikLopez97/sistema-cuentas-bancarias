import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const users = [
    { id: 1, username: 'test', password: '$2a$10$7DQgFteF6y6SuhAlH.8vMeOjx80DxCQ/JAvRaI3KmjO5F7ALKN5ry' } // password is "password"
];

export const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    res.send({ token });
};