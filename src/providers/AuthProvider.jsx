import {createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const authInfo = {user, createUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
/**
 * 1. create context export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use  the middle ot the Provider
 */