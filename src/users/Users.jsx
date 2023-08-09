import {useEffect, useState} from 'react';
import axios from 'axios';

export const Users = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div>
            {users.map(user => <div key={user.id} data-testid="user-item">{user.name}</div>)}
        </div>
    )
}