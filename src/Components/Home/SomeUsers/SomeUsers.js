import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UseAuthContextAPI from '../../../Hooks/UseAuthContextAPI';

const SomeUsers = () => {
    const { UsersAPI } = UseAuthContextAPI();
    const { users } = UsersAPI();

    const someUsers = [];
    let i = 0;
    while (i < users.length) {
        const data = users[i];
        i++;
        if (i <= 8) {
            someUsers.push(data)
        }
    };

    const history = useHistory();
    const clickHandler = (id) => {
        history.push(`/users/user_id/${id}`)
    }

    const allBlogs = useHistory();
    const clickAllUsersHandler = () => {
        allBlogs.push(`/users`)
    }
    return (
        <Container>
            <Row xs={1} md={4} className="g-4 my-3">
                {
                    someUsers.map((user) => {
                        return (
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
                        )
                    })
                }
            </Row>
            <section className='text-center'>
                <Button onClick={clickAllUsersHandler} variant="success">All Users</Button>
            </section>
        </Container>
    );
};

export default SomeUsers;