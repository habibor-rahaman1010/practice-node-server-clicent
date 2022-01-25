import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './Users.module.css'
import UseAuthContextAPI from '../../../Hooks/UseAuthContextAPI';
import User from '../User/User';

const Users = () => {
    const { UsersAPI } = UseAuthContextAPI();
    const { users } = UsersAPI();

    return (
        <Container>
            <h2 className={styles.text}>This is my users</h2>

            <Row xs={1} md={4} className="g-4 my-3">
                {
                    users.map((user) => <User user={user} key={user._id}></User>)
                }
            </Row>

        </Container>
    );
};

export default Users;