import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseAuthContextAPI from '../../../Hooks/UseAuthContextAPI';
import Blog from '../Blog/Blog';
import styles from './Blogs.module.css'

const Blogs = () => {
    const { BlogsAPI } = UseAuthContextAPI();
    const { blogs } = BlogsAPI();

    return (
        <Container>
            <h2 className={styles.text}>Thsi is my blogs</h2>

            <Row xs={1} md={4} className="g-4 my-3">
                {
                    blogs.map((blog) => <Blog blog={blog} key={blog._id}></Blog>)
                }
            </Row>
        </Container>
    );
};

export default Blogs;