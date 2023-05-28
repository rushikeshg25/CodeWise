import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Error404 = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');
        },4000)
    },[]);

    return (
        <div>Page not Found.Redirecting to Home</div>
    )
}

export default Error404;