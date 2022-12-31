import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setFriends(data));
    }, []);

    return (
        <div>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}>

                </Friend>)
            }
            <h2>Hello Friends,How are you?</h2>
            <p>Lend me some money!:{friends.length}</p>
        </div>
    );
};

export default Friends;