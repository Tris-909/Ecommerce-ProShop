import React from 'react'
import { Row, Col, Table, Form } from 'react-bootstrap';

const PhoneInput = (props) => {

    const {
        phoneOperatingSystem, setphoneOperatingSystem,
        networkCompability, setnetworkCompability,
        DualSim, setDualSim,
        phoneColour, setphoneColour,
        DeviceScreen, setDeviceScreen, 
        Resolution, setResolution, 
        InternalMemory, setInternalMemory, 
        FrontCamera, setFrontCamera, 
        RearCamera, setRearCamera, 
        Processor, setProcessor, 
        phoneWifi, setphoneWifi, 
        phoneWarranty, setphoneWarranty
    } = props;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={12}>
                <h2> Phone Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Operating System</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={phoneOperatingSystem}
                            onChange={(e) => setphoneOperatingSystem(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Network Compability</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={networkCompability}
                            onChange={(e) => setnetworkCompability(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Dual Sim</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={DualSim}
                            onChange={(e) => setDualSim(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Colour</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={phoneColour}
                            onChange={(e) => setphoneColour(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Devices Screen</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={DeviceScreen}
                            onChange={(e) => setDeviceScreen(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Resolution</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={Resolution}
                            onChange={(e) => setResolution(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Internal Memory</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={InternalMemory}
                            onChange={(e) => setInternalMemory(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Front Camera</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={FrontCamera}
                            onChange={(e) => setFrontCamera(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Rear Camera</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={RearCamera}
                            onChange={(e) => setRearCamera(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Processor</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={Processor}
                            onChange={(e) => setProcessor(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Wi-Fi</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={phoneWifi}
                            onChange={(e) => setphoneWifi(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Manufacturer's warranty</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={phoneWarranty}
                            onChange={(e) => setphoneWarranty(e.target.value)} />
                        </td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default PhoneInput;
