import { v4 as userId } from 'uuid';

const user = [
    {
        id: userId(),
        name: "dnyandeo",
        email: "test22@gmail.com",
        password: "$2a$10$fBZA5pw/bKsF/iBF0JlouOl/vUQ6t83SOC4eOsJ9cRTeK2EHU5G2i",
        // password: "Dnyanu33!",
    }

];

class User {
    constructor(name, email, password) {
        this.id = userId();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getUserByEmail = (email) => {
        return user.find((user) => user.email === email);
    };

    postUser = () => {
        user.push(this);
    };
}

export default User;