import React from 'react'
import { Row, Col, Table, Form } from 'react-bootstrap';

const HeadphoneInput = (props) => {
    const {
        HeadphoneType,
        setHeadphoneType,
        Colour,
        setHeadphoneColour,
        VoiceControl,
        setVoiceControl,
        NoiseReductionType,
        setNoiseReductionType,
        BuiltInMicrophone,
        setBuiltInMicrophone,
        Warranty,
        setWarranty
    } = props;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={12}>
              <h2> Headphone Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Headphone Type</td>
                      <td>
                          <Form.Control 
                            type='text'
                            value={HeadphoneType}
                            onChange={(e) => setHeadphoneType(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Colour</td>
                      <td>
                            <Form.Control 
                            type='text'
                            value={Colour}
                            onChange={(e) => setHeadphoneColour(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Voice Control</td>
                      <td>
                          <Form.Control 
                          type='text'
                          value={VoiceControl}
                          onChange={(e) => setVoiceControl(e.target.value)} />
                      </td>
                    </tr>
                    <tr>
                      <td>Noise Reduction Type</td>
                      <td>
                          <Form.Control 
                          type='text'
                          value={NoiseReductionType}
                          onChange={(e) => setNoiseReductionType(e.target.value)} />
                       </td>
                    </tr>
                    <tr>
                      <td>Built-In Microphone</td>
                      <td>
                            <Form.Control 
                            type='text'
                            value={BuiltInMicrophone}
                            onChange={(e) => setBuiltInMicrophone(e.target.value)} />
                      </td>
                    </tr>
                    <tr>
                      <td>Manufacturer's warranty</td>
                      <td>
                            <Form.Control 
                            type='text'
                            value={Warranty}
                            onChange={(e) => setWarranty(e.target.value)} />
                        </td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default HeadphoneInput;
