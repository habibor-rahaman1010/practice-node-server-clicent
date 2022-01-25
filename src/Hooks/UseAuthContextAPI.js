import { useContext } from 'react';
import { MyContextAPI } from '../ContextAPI/ContextAPI';

const UseAuthContextAPI = () => {
    return useContext(MyContextAPI);
};

export default UseAuthContextAPI;