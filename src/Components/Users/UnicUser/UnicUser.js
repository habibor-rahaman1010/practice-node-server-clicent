import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UnicUser = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        const detailsAPI = `http://localhost:5000/users/user_id/${id}`;
        fetch(detailsAPI)
            .then((res) => res.json())
            .then((data) => setDetails(data))
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const {
        name,
        gender,
        greeting,
        about,
        address,
        age,
        balance,
        company,
        email,
        eyeColor,
        favoriteFruit,
        friends,
        registered,
        isActive
    } = details;
    const allFriends = friends?.map((x) => x?.name);

    return (
        <Container className='mt-5'>
            <Col className='w-50 m-auto'>
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            <p> Age: {age}</p>
                            <p>Gender: {gender}</p>
                            <p>Email: {email}</p>
                            <p>Greeting: {greeting}</p>
                            <p>Friends: {allFriends?.join(', ')}</p>
                            <p>Address: {address}</p>
                            <p>Balance: {balance}</p>
                            <p>EyeColor: {eyeColor}</p>
                            <p>FavoriteFruit: {favoriteFruit}</p>
                            <p>Company: {company}</p>
                            <p>About: {about}</p>
                            <p>Registered: {registered}</p>
                            <p>IsActive: {isActive?.toString()}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default UnicUser;