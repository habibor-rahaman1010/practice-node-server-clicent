import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UseAuthContextAPI from '../../../Hooks/UseAuthContextAPI';

const SomeBlogs = () => {
    const { BlogsAPI } = UseAuthContextAPI();
    const { blogs } = BlogsAPI();

    const someBlogs = [];
    let i = 0;
    while (i < blogs.length) {
        const data = blogs[i];
        i++;
        if (i <= 8) {
            someBlogs.push(data)
        }
    };

    const history = useHistory();
    const clickHandler = (id) => {
        history.push(`/blogs/blogs_id/${id}`)
    }

    const allBlogs = useHistory();
    const clickAllBlogsHandler = () => {
        allBlogs.push(`/blogs`)
    }


    return (
        <Container>
            <Row xs={1} md={4} className="g-4 my-3">
                {
                    someBlogs.map((blog) => {
                        return (
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
                        )
                    })
                }
            </Row>
            <section className='text-center'>
                <Button onClick={clickAllBlogsHandler} variant="success">All Blogs</Button>
            </section>
        </Container>
    );
};

export default SomeBlogs;