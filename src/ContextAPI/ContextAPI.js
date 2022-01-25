import React, { createContext } from 'react';
import UsersAPI from '../DataFetch/UsersAPI/UsersAPI';
import BlogsAPI from '../DataFetch/BlogsAPI/BlogsAPI'




export const MyContextAPI = createContext({});
const ContextAPI = ({ children }) => {
    const allContext = {
        UsersAPI,
        BlogsAPI,
    }

    return (
        <MyContextAPI.Provider value={allContext}>
            {children}
        </MyContextAPI.Provider>
    );
};

export default ContextAPI;