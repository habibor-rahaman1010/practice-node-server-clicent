import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const User = ({ user }) => {
    const history = useHistory();
    const clickHandler = (id) => {
        history.push(`/users/user_id/${id}`)
    }

    return (
        <Container>
            <Col>
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{user?.name}</Card.Title>
                        <Card.Text>
                            {user?.about?.slice(0, 100)}
                        </Card.Text>
                        <Button onClick={() => { clickHandler(user._id) }} variant="secondary">More details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default User;