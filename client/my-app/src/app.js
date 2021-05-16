import React from 'react'
import Content from './component/content';
import Footer from './component/footer';
import Header from './component/header';
import "./index.css";
import {Route} from 'react-router-dom';
import SchoolGroup from './component/schoolGroup';
import SignUp from './component/signUp';

function App() {
    return (
        <>
        <Header />
        <Route exact path="/">
            <Content />
            <Footer />
        </Route>
        <Route path="/schoolGroup">
            <SchoolGroup />
        </Route>
        <Route path="/signIn">
            <SignUp name = "signin"/>
        </Route>
        <Route path="/signUp">
            <SignUp name = "signup"/>
        </Route>
        </>
    )
}

export default App;
