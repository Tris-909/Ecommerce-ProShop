import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123', 10),
        isAdmin: true
    },
    {
        name: 'Random1',
        email: 'random1@email.com',
        password: bcrypt.hashSync('123', 10),
        isAdmin: false
    },
    {
        name: 'Random2',
        email: 'random2@email.com',
        password: bcrypt.hashSync('123', 10),
        isAdmin: false
    }
]

export default users;