import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 2rem;
    width: 50%;
`;

const RightContainer = styled.div`
    background-color: black;
    color: white;
    font-size: 1.5rem;
    width: 50%;
    margin-left: 2rem;
    padding: 2rem;
`;

const HelpAndSupport = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: email,
            to_name: 'Tran Minh Tri',
            message_html: message
        };
        
        emailjs.send('gmail', 'template_KSxjiZig', templateParams, 'user_pYBPiABaQA2DtYNdzP8gL')
        .then((result) => {
            console.log(result.text);
            setEmail('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <Container>
            <LeftContainer>
                <h1> CONTACT FORM </h1>
                <Form style={{ border: '2px solid black', padding: '3rem' }}>
                    <Form.Group controlId='email'>
                        <Form.Label>Your Email :</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="yourgmail@gmail.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Your Message :</Form.Label>
                        <Form.Control 
                             as="textarea"
                            value={message} 
                            rows={10}
                            onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                    <Button onClick={sendMessage}> Submit </Button>
                </Form>
            </LeftContainer>
            <RightContainer>
                <p> Hi, my name is Tri Tran - the creator of this websites. </p>
                <p> This project is a JB-HiFi Clone, the system behind it is really complicated with so many components so I guess there will be bugs somewhere I don't know. </p>
                <p> If you have any bugs you know, please send it through the form on the left-side so I can fix it and thank-you in advance. Or If you just want to say hi, please feel free to do so.</p>
                <p> If you want to look into the codebase please visit <a href="https://tranminhtri.com/" target="_blank" style={{ color: 'red' }}>this websites</a> to see, I don't mind :D </p>
            </RightContainer>
        </Container>
    );
}

export default HelpAndSupport;