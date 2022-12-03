import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, id, username } = props.friend;

    const navigate = useNavigate();
    const showFriendDetail = () => {
        navigate('/friend/' + id)
    }
    return (
        <div style={{ textAlign: 'center', border: '2px solid green', padding: '15px', margin: '15px' }}>
            <h1>{name}</h1>
            <Link to={'/friend/' + id}>See details</Link>
            <button onClick={showFriendDetail}>{username}id:{id}</button>

        </div>
    );
};

export default Friend;