import React from 'react'
import { Row, Col, Table } from 'react-bootstrap';

const GameTable = (props) => {
    const gameInfo = props.singleGame.gameDetail;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={8}>
                <h2> Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Platform</td>
                      <td>{gameInfo.Platform}</td>
                    </tr>
                    <tr>
                      <td>Gaming Gerne</td>
                      <td>{gameInfo.GamingGerne}</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>{gameInfo.Rating}</td>
                    </tr>
                    <tr>
                      <td>Consumer Advice</td>
                      <td>{gameInfo.ConsumerAdvice}</td>
                    </tr>
                    <tr>
                      <td>Game Developer</td>
                      <td>{gameInfo.GameDeveloper}</td>
                    </tr>
                    <tr>
                      <td>Game Publisher</td>
                      <td>{gameInfo.GamePublisher}</td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default GameTable;
