import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UnicBlog = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const detailsAPI = `http://localhost:5000/blogs/blogs_id/${id}`;
        fetch(detailsAPI)
            .then((res) => res.json())
            .then((data) => setDetails(data))
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const { author, description, title, topics, uploadDate, imageUrl } = details;
    const allTopics = topics?.map((x) => x);

    return (
        <Container className='mt-5 mb-5'>
            <Col className='w-75 m-auto'>
                <Card>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>Tile: {title}</Card.Title>
                        <Card.Text>
                            <p> Author: {author}</p>
                            <p>Topics: {allTopics?.join(', ')}</p>
                            <p>{description}</p>
                            <p>Published: {uploadDate}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default UnicBlog;