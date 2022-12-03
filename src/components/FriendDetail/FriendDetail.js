import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);

    return (
        <div style={{ textAlign: 'center', border: '2px solid purple', padding: '15px', borderRadius: '5px', width: '400px', margin: '20px auto' }}>
            <h1>name: {friend.name} </h1>
            <p>username: {friend.username}</p>
            <p>email: {friend.email}</p>
            <p>website: {friend.website}</p>
            <p>address: {friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;