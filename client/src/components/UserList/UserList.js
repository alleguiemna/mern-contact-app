import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/userAction';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = () => {
    const dispatch = useDispatch();
    const {users,loading} = useSelector(state => state);
    useEffect(() => {
        dispatch(getUser())
    }, [ ])
    console.log(users)
    return (
        <div>
            {
                (loading) ?
                <h1>Loading ...</h1>
                :
                <div className="list">
                    {
                        users.map(user => <UserCard user={user} key={user.id}/>)
                    }
                </div>
            }
        </div>
    )
}

export default UserList
