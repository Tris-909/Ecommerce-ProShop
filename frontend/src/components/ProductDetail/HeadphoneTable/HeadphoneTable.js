import React from 'react'
import { Row, Col, Table } from 'react-bootstrap';

const HeadphoneTable = (props) => {
    const headphoneInfo = props.singleHeadphonePhone.headphoneDetail;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={8}>
                <h2> Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Headphone Type</td>
                      <td>{headphoneInfo.HeadphoneType}</td>
                    </tr>
                    <tr>
                      <td>Colour</td>
                      <td>{headphoneInfo.Colour}</td>
                    </tr>
                    <tr>
                      <td>Voice Control</td>
                      <td>{headphoneInfo.VoiceControl}</td>
                    </tr>
                    <tr>
                      <td>Noise Reduction Type</td>
                      <td>{headphoneInfo.NoiseReductionType}</td>
                    </tr>
                    <tr>
                      <td>Built-In Microphone</td>
                      <td>{headphoneInfo.BuiltInMicrophone}</td>
                    </tr>
                    <tr>
                      <td>Manufacturer's warranty</td>
                      <td>{headphoneInfo.Warranty}</td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default HeadphoneTable;
