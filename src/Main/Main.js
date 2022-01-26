import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Share/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Users from '../Components/Users/Users/Users';
import Blogs from '../Components/Blogs/Blogs/Blogs';
import NotFound from '../Components/NotFound/NotFound';
import ContextAPI from '../ContextAPI/ContextAPI';
import UnicUser from '../Components/Users/UnicUser/UnicUser';
import UnicBlog from '../Components/Blogs/UnicBlog/UnicBlog';
import AddUser from '../Components/AddUser/AddUser';


const Main = () => {
    return (
        <div className='Main'>
            <ContextAPI>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path={"/"}>
                            <Home></Home>
                        </Route>

                        <Route exact path={"/users"}>
                            <Users></Users>
                        </Route>

                        <Route exact path={"/user/add_user"}>
                            <AddUser></AddUser>
                        </Route>

                        <Route exact path={"/users/user_id/:id"}>
                            <UnicUser></UnicUser>
                        </Route>

                        <Route exact path={"/blogs"}>
                            <Blogs></Blogs>
                        </Route>

                        <Route exact path={"/blogs/blogs_id/:id"}>
                            <UnicBlog></UnicBlog>
                        </Route>

                        <Route exact path={"/*"}>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ContextAPI>
        </div>
    );
};

export default Main;