import React, { useEffect, useState } from 'react';
import fetcer from '../api';

const Services = () => {

    const [services, setServices] = useState();
    useEffect(() => {
        (async() =>  {
          const res = await  fetcer.get('/service');
          setServices(res.data)

        })()
    }, [])

    return (
        <div>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
            <h1>this is services page</h1>
        </div>
    );
};

export default Services;