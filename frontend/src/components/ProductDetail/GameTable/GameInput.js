import React from 'react'
import { Row, Col, Table, Form } from 'react-bootstrap';

const GameInput = (props) => {
    const {
        Platform,
        setPlatform,
        GamingGerne,
        setGamingGerne,
        Rating,
        setRating,
        ConsumerAdvice,
        setConsumerAdvice,
        GameDeveloper,
        setGameDeveloper,
        GamePublisher,
        setGamePublisher
    } = props;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={12}>
                <Table striped bordered hover>
                  <thead>
                    <h2> Game Details : </h2>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Platform</td>
                      <td>
                          <Form.Control 
                            type='text'
                            value={Platform}
                            onChange={(e) => setPlatform(e.target.value)} />
                      </td>
                    </tr>
                    <tr>
                      <td>Gaming Gerne</td>
                      <td>
                        <Form.Control 
                            type='text'
                            value={GamingGerne}
                            onChange={(e) => setGamingGerne(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>
                        <Form.Control 
                            type='text'
                            value={Rating}
                            onChange={(e) => setRating(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Consumer Advice</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={ConsumerAdvice}
                            onChange={(e) => setConsumerAdvice(e.target.value)} />
                          </td>
                    </tr>
                    <tr>
                      <td>Game Developer</td>
                      <td>
                        <Form.Control 
                            type='text'
                            value={GameDeveloper}
                            onChange={(e) => setGameDeveloper(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Game Publisher</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={GamePublisher}
                            onChange={(e) => setGamePublisher(e.target.value)} />
                        </td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default GameInput;
