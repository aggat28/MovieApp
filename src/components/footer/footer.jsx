import React from "react";
import { Container } from "react-bootstrap";


export function Footer(){

    return (
        <Container fluid style={{color: '#fff', backgroundColor: '#161616', textAlign: 'center', padding: '1.5rem'}}>
            <Container style={{fontWeight: 'bold'}}>
            © {new Date().getFullYear()} All rights reserved
            </Container>
        </Container>
    )
}