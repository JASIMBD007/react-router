import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>This is details about Friends:{friendId}</h2>
            <h3>Name:{friend.name}</h3>
            <h4>Email:{friend.email}</h4>
        </div>
    );
};

export default FriendDetails;