import React from 'react';
import SomeBlogs from './SomeBlogs/SomeBlogs';
import SomeUsers from './SomeUsers/SomeUsers';

const Home = () => {

    return (
        <div>
            <SomeUsers></SomeUsers>
            <SomeBlogs></SomeBlogs>
        </div>
    );
};

export default Home;