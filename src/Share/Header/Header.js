import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ fontSize: '30px', cursor: 'pointer' }} as={NavLink} to={"/"}>Blogs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 mx-4 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='mx-3' as={NavLink} to={"/users"} >Users</Nav.Link>
                            <Nav.Link className='mx-3' as={NavLink} to={"/blogs"}>blogs</Nav.Link>
                            <Nav.Link className='mx-3' as={NavLink} to={"/add_user"}>Add User</Nav.Link>
                            <Nav.Link className='mx-3' as={NavLink} to={"/add_blog"}>Add Blog</Nav.Link>

                        </Nav>

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;