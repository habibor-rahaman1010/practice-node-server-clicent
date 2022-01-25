import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import style from './Blog.module.css'

const Blog = ({ blog }) => {
    const history = useHistory();
    const clickHandler = (id) => {
        history.push(`/blogs/blogs_id/${id}`)
    }

    return (
        <Container>
            <Col>
                <Card>
                    <Card.Img variant="top" src={blog.imageUrl} />
                    <Card.Body>
                        <Card.Title>{blog?.title}</Card.Title>
                        <Card.Text>
                            Author: {blog?.author}
                        </Card.Text>
                        <Card.Text>
                            {blog?.description?.slice(0, 100)}...
                        </Card.Text>
                        <Button onClick={() => { clickHandler(blog._id) }} variant="secondary">More details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default Blog;