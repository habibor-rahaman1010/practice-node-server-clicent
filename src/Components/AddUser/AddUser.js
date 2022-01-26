import React, { useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Select from 'react-select';
// import { colourOptions } from '../data';

const colourOptions = [
    { name: 'Habibor Rahaman', value: 'Habibor Rahaman', label: 'Habibor Rahaman', isFixed: true },
    { name: 'Wahidur Rahman', value: 'Wahidur Rahman', label: 'Wahidur Rahman', isDisabled: false },
    { name: 'Rifat', value: 'Rifat', label: 'Rifat' },
    { name: 'Arafat', value: 'Arafat', label: 'Arafat', isFixed: true },
    { name: 'Siyam', value: 'Siyam', label: 'Siyam' },
    { name: 'Shawon', value: 'Shawon', label: 'Shawon' },
    { name: 'Allen', value: 'Allen', label: 'Allen' },
    { name: 'Maffener', value: 'Maffener', label: 'Maffener' },
    { name: 'John', value: 'John', label: 'John' },
    { name: 'Alva', value: 'Alva', label: 'Alva' },
];

const AddUser = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const emailRef = useRef();
    const greetingRef = useRef();
    const textRef = useRef();
    const friendsRef = useRef();
    const addressRef = useRef();
    const balanceRef = useRef();
    const eyeColorRef = useRef();
    const favoriteFruitRef = useRef();
    const companyRef = useRef();
    const isActiveRef = useRef(true)

    const handlerSubmit = (event) => {
        const name = nameRef?.current?.value;
        const age = ageRef?.current?.value;
        const gender = genderRef?.current.value;
        const email = emailRef?.current?.value;
        const greeting = greetingRef.current.value;
        const about = textRef?.current?.value;
        const address = addressRef?.current?.value;
        const balance = balanceRef?.current?.value;
        const eyeColor = eyeColorRef?.current?.value;
        const company = companyRef?.current?.value;
        const favoriteFruit = favoriteFruitRef?.current?.value;
        const isActive = isActiveRef?.current?.value;


        const newUser = {
            name: name,
            age: age,
            gender: gender,
            email: email,
            greeting: greeting,
            about: about,
            friends: selectedOption,
            address: address,
            balance: balance,
            eyeColor: eyeColor,
            company: company,
            favoriteFruit: favoriteFruit,
            registered: new Date(),
            isActive: isActive
        }

        fetch('http://localhost:5000/all_users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert('Succefully data addeed to database');
                    event.target.reset();
                }
            })
            .catch((err) => {
                alert('somthing went worng, try agin', err)
            })

        event.preventDefault();
    };


    return (
        <Container className='w-25 mt-5'>
            <h2>This is Add User</h2> <br />
            <Form onSubmit={handlerSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control maxLength={30} type="text" ref={nameRef} placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="usersAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" ref={ageRef} placeholder="Enter Age" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                    <Form.Select ref={genderRef} id="Select">
                        <option>Meal</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control maxLength={45} ref={emailRef} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="usersgreeting">
                    <Form.Label>Greeting</Form.Label>
                    <Form.Control type="text" ref={greetingRef} placeholder="Enter Greeting" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="friends">
                    <Form.Label>Friends</Form.Label>
                    <Select ref={friendsRef}
                        defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti
                        name="colors"
                        options={colourOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={setSelectedOption}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control maxLength={150} type="text" ref={addressRef} placeholder="Enter Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="blance">
                    <Form.Label>Balance</Form.Label>
                    <Form.Control maxLength={150} type="text" ref={balanceRef} placeholder="Enter balnce" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="EyeColor">
                    <Form.Label>EyeColor</Form.Label>
                    <Form.Control maxLength={150} type="text" ref={eyeColorRef} placeholder="Enter EyeColor" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="FavoriteFruit">
                    <Form.Label>Favorite Fruit</Form.Label>
                    <Form.Control maxLength={150} type="text" ref={favoriteFruitRef} placeholder="Enter Favorite Fruit" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control maxLength={150} type="text" ref={companyRef} placeholder="Enter Company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="isActiveRef">
                    <Form.Label>IsActiveRef</Form.Label>
                    <Form.Control maxLength={150} type="text" ref={isActiveRef} placeholder="Enter IsActiveRef" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write somthing about your self</Form.Label>
                    <Form.Control maxLength={150} ref={textRef} as="textarea" rows={3} placeholder='Max length 150' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container >
    );
};

export default AddUser;