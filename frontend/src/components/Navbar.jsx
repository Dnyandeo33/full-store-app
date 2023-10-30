import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const NavBar = () => {
    const getCookies = new Cookies();
    const isCookieSet = getCookies.get('token');
    console.log(isCookieSet);
    return (
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 justify-between">
                <div className="flex flex-1 items-stretch justify-start">
                    <Link to="/" className="flex flex-shrink-0 items-center">
                        <h1 className=" text-lg uppercase font-semibold">
                            Fake store
                        </h1>
                    </Link>
                </div>
                <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-indigo-700 text-lg font-medium"
                        href="/"
                    >
                        Product
                    </Link>
                    <Link
                        to="/add-product"
                        className="text-gray-700 hover:text-indigo-700 text-lg font-medium"
                        href="/add-product"
                    >
                        Add Product
                    </Link>

                    {!isCookieSet ? (
                        <Link
                            to="/login"
                            className="text-gray-700 hover:text-indigo-700 text-lg font-medium"
                        >
                            Login
                        </Link>
                    ) : (
                        <Link
                            to="/logout"
                            className="text-gray-700 hover:text-indigo-700 text-lg font-medium"
                        >
                            Logout
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
