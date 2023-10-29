import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'universal-cookie';
import Cookies from 'js-cookie';
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';

const Login = () => {
    const navigate = useNavigate();

    // user login state
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });
    // error handle state
    const [formError, setFormError] = useState({
        email: '',
        password: ''
    });

    // handel error
    const [error, setError] = useState({});

    // handel inputs
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({ ...userLogin, [name]: value });
    };

    // handle submit and validation
    const handleSubmit = (e) => {
        e.preventDefault();

        let inputError = {
            email: '',
            password: ''
        };

        if (!userLogin.email && !userLogin.password) {
            setFormError({
                ...inputError,
                email: 'Enter valid email address',
                password: `Password shouldn't be empty`
            });
            return;
        }
        if (!userLogin.email) {
            setFormError({
                ...inputError,
                email: 'Enter valid email address'
            });
            return;
        }
        if (!userLogin.password) {
            setFormError({
                ...inputError,
                password: `Password shouldn't be empty`
            });
            return;
        }

        setFormError(inputError);
        setFormError((prevState) => ({
            ...prevState,
            successMsg: `Registration successful, Please login!`
        }));

        const { email, password } = userLogin;

        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);

        if (isValidEmail && isValidPassword) {
            const userLogin = { email, password };

            // user login function
            const postLogin = async () => {
                try {
                    const res = await axios.post(
                        'http://localhost:3005/login',
                        userLogin
                    );
                    const token = res.data.token;
                    const setCookies = Cookies.set('token', token, {
                        sameSite: 'Lax',
                        secure: true
                    });
                    if (setCookies) {
                        navigate('/');
                    } else {
                        ('login failed');
                    }
                } catch (error) {
                    setError(error);
                }
            };
            postLogin();
            setUserLogin({
                email: '',
                password: ''
            });
        }
    };

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
                                            id="email"
                                            name="email"
                                            value={userLogin.email}
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
                                            value={userLogin.password}
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
                                    <p className=" text-red-400 text-sm">
                                        {error.message}
                                    </p>
                                    <div className="relative">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white rounded-md px-2 py-1"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <p className="mt-8">
                                        Create your account?{' '}
                                        <a
                                            href="/sign-up"
                                            className="text-blue-500 hover:text-blue-700 font-semibold"
                                        >
                                            Register
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

export default Login;
