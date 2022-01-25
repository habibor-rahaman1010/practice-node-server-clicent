import { useEffect, useState } from 'react';

const BlogsAPI = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const BlogsAPI = `http://localhost:5000/all_blogs`;
        fetch(BlogsAPI)
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return {
        blogs,
        setBlogs,
    };
};

export default BlogsAPI;