import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        <div data-testid='users-page'>
            {users.map(user => <Link
                    to={`/users/${user.id}`}
                    key={user.id}
                    data-testid="user-item"
                >
                    {user.name}
                </Link>
            )}
        </div>
    )
}