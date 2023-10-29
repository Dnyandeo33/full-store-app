import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


import verifyPassword from '../../frontend/src/utils/verifyPassword.js';
import hashPassword from '../utils/hashPassword.js';
import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';

const userController = {
    // user register
    register: (req, res) => {
        const { name, email, password, rePassword } = req.body;
        const emailExist = User.getUserByEmail(email);

        if (!emailExist) {
            const isValidateEmail = validateEmail(email);
            const isValidatePassword = validatePassword(password);
            const isVerifyPassword = verifyPassword(password, rePassword);

            if (
                name &&
                isValidateEmail &&
                isValidatePassword &&
                isVerifyPassword
            ) {
                const hashedPassword = hashPassword(password);
                const newUser = new User(name, email, hashedPassword);
                newUser.postUser();
                res
                    .status(201)
                    .json({ message: `User created successfully ` });
            } else {
                res.status(400).json({ message: `Name, Email or password invalid` });
            }


        } else {
            res.status(403).json({ message: `Email already exist, Please login` });
        }

    },

    // user login
    login: (req, res) => {
        const { email, password } = req.body;

        const emailExist = User.getUserByEmail(email);
        if (emailExist) {
            bcrypt.compare(password, emailExist.password, (err, isValid) => {
                if (isValid) {
                    const token = jwt.sign(
                        { user: emailExist },
                        process.env.SECRET_TOKEN
                    );

                    res.cookie('token', token, { httpOnly: true })
                    res.status(200).json({ token: token })
                    // return res.status(200).json({ message: `login successfully` })

                } else {
                    res.status(400).json({ message: `Incorrect email or password` });
                }
            });
        } else {
            res.status(404).json({
                message: `Email doesn't exist, Please register your email`
            });
        }
    },

    // user logout

    logout: (req, res) => {
        res.clearCookie('token');
        res.status(200).json({ message: `logout successfully` });
    }
};

export default userController;