import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';

function App() {
    return (
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">
                    Welcome To React-Bootstrap TypeScript Example v2
                </h1>
            </Jumbotron>
            <h2>Buttons</h2>
            <ButtonsShowcase />
            <h2>Toasts</h2>
            <ToastsShowcase />
        </Container>
    );
}

export default App;
