import { useEffect, useState } from 'react';

const UsersAPI = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const UsersAPI = `http://localhost:5000/all_users`;
        fetch(UsersAPI)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return {
        users,
        setUsers,
    }
};

export default UsersAPI;