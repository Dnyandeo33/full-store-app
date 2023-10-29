'use client';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';
import verifyPassword from '../utils/verifyPassword';

const SignUp = () => {
    const navigate = useNavigate();
    // registration state
    const [userRegistration, setUserRegistration] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    });

    // form error state
    const [formError, setFormError] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    });

    // handle server response state
    const [response, setResponse] = useState({});

    const [error, setError] = useState({});

    // handle input
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({ ...userRegistration, [name]: value });
    };

    // handle submit and validation
    const handleSubmit = (e) => {
        e.preventDefault();
        let inputError = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };

        if (
            !userRegistration.name &&
            !userRegistration.email &&
            !userRegistration.password &&
            !userRegistration.rePassword
        ) {
            setFormError({
                ...inputError,
                name: 'Enter valid name',
                email: 'Enter valid email address',
                password: `Password shouldn't be empty`
            });
            return;
        }
        if (!userRegistration.name) {
            setFormError({
                ...inputError,
                name: 'Enter valid name'
            });
            return;
        }
        if (!userRegistration.email) {
            setFormError({
                ...inputError,
                email: 'Enter valid email address'
            });
            return;
        }
        if (!userRegistration.password) {
            setFormError({
                ...inputError,
                password: `Password shouldn't be empty`
            });
            return;
        }
        if (!userRegistration.password !== !userRegistration.rePassword) {
            setFormError({
                ...inputError,
                rePassword: `Password & confirm password should be same`
            });
            return;
        }

        setFormError(inputError);
        setFormError((prevState) => ({
            ...prevState,
            successMsg: `Registration successful, Please login!`
        }));

        const { name, email, password, rePassword } = userRegistration;

        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);
        const isVerifyPassword = verifyPassword(password, rePassword);

        if (isValidEmail && isValidPassword && isVerifyPassword) {
            const newUser = { name, email, password, rePassword };

            // user registration function
            const postRegister = async () => {
                try {
                    const res = await axios.post(
                        'http://localhost:3005/register',
                        newUser
                    );
                    setResponse(res.data);
                    navigate('/login');
                } catch (error) {
                    console.log(error);
                    setError(error.response.data);
                }
            };
            postRegister();
            setUserRegistration({
                name: '',
                email: '',
                password: '',
                rePassword: ''
            });
        }
    };

    // form for registration
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-lg">
                        <div>
                            <h1 className="text-2xl font-semibold">
                                Personal details, Please fill all
                            </h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="name"
                                            name="name"
                                            value={userRegistration.name}
                                            onChange={handleInput}
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Name"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <p className="text-red-400 text-sm">
                                        {formError.name}
                                    </p>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="email"
                                            name="email"
                                            value={userRegistration.email}
                                            onChange={handleInput}
                                            type="email"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Email address"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Email
                                        </label>
                                    </div>
                                    <p className="text-red-400 text-sm">
                                        {formError.email}
                                    </p>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            value={userRegistration.password}
                                            onChange={handleInput}
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Password"
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <p className="text-red-400 text-sm">
                                        {formError.password}
                                    </p>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="rePassword"
                                            name="rePassword"
                                            value={userRegistration.rePassword}
                                            onChange={handleInput}
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="confirm password"
                                        />
                                        <label
                                            htmlFor="rePassword"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            confirm password
                                        </label>
                                    </div>
                                    <p className="text-red-400 text-sm">
                                        {formError.rePassword}
                                    </p>
                                    <p className=" text-green-600 text-sm">
                                        {response.message}
                                    </p>
                                    <p className=" text-red-400 text-sm">
                                        {error.message}
                                    </p>
                                    <div className="relative">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white rounded-md px-2 py-1"
                                        >
                                            Register
                                        </button>
                                    </div>
                                    <p className="mt-8">
                                        Login your account?{' '}
                                        <a
                                            href="/login"
                                            className="text-blue-500 hover:text-blue-700 font-semibold"
                                        >
                                            Login
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
