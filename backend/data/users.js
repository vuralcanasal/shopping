import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@shopping.com',
        password: bcrypt.hashSync('admin', 10),
        isAdmin: true
    },
    {
        name: 'John Smith',
        email: 'mr_smith@shopping.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane Smith',
        email: 'mrs_smith@shopping.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }
]

export default users