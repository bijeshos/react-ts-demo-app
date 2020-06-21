import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';
import TopBar from "./components/TopBar";

function App() {
    return (
        <>
            <TopBar/>
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">
                        Demo app
                    </h1>
                </Jumbotron>
                <h2>Buttons</h2>
                <ButtonsShowcase/>
                <h2>Toasts</h2>
                <ToastsShowcase/>
            </Container>
        </>
    );
}

export default App;
