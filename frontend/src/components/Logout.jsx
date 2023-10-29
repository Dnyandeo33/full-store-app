import axios from 'axios';
import Cookies from 'js-cookie';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// logout function
const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axios.post('http://localhost:3005/logout');
        Cookies.remove('token');
        navigate('/');
    }, []);
};

export default Logout;
