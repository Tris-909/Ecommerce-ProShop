import React from 'react'
import { Row, Col, Table, Form } from 'react-bootstrap';

const LaptopInput = (props) => {
    const {
        displaySizeInches, setdisplaySizeInches,
        resolutionPixels, setresolutionPixels,
        screenResolution, setscreenResolution,
        displayType, setdisplayType,
        proccessorType, setproccessorType,
        proccessorCores, setproccessorCores,
        processorMemoryCache, setprocessorMemoryCache,
        processorClockSpeed, setprocessorClockSpeed,
        processorMaxClockSpeed, setprocessorMaxClockSpeed,
        graphicsProcessor, setgraphicsProcessor,
        ram, setram,
        ssdStorage, setssdStorage,
        usbTwoPointOPorts, setusbTwoPointOPorts,
        usbCPorts, setusbCPorts,
        cardReader, setcardReader,
        webCam, setwebCam,
        wifi, setwifi,
        operatingSystem, setoperatingSystem,
        manufacturersWarantty, setmanufacturersWarantty
    } = props;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={12}>
                <h2> Laptop Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Display Size (inches)</td>
                      <td>
                        <Form.Control 
                            type='text'
                            value={displaySizeInches}
                            onChange={(e) => setdisplaySizeInches(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Resolution (Pixels)</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={resolutionPixels}
                            onChange={(e) => setresolutionPixels(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Screen Resolution</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={screenResolution}
                            onChange={(e) => setscreenResolution(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Display type</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={displayType}
                            onChange={(e) => setdisplayType(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Processor Type</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={proccessorType}
                            onChange={(e) => setproccessorType(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Processor Cores</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={proccessorCores}
                            onChange={(e) => setproccessorCores(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Processor Memory Cache</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={processorMemoryCache}
                            onChange={(e) => setprocessorMemoryCache(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Processor Clock Speed (GHz)</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={processorClockSpeed}
                            onChange={(e) => setprocessorClockSpeed(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Processor Max. Clock Speed (GHz)</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={processorMaxClockSpeed}
                            onChange={(e) => setprocessorMaxClockSpeed(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Graphics processor</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={graphicsProcessor}
                            onChange={(e) => setgraphicsProcessor(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>RAM (GB)</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={ram}
                            onChange={(e) => setram(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>SSD Storage</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={ssdStorage}
                            onChange={(e) => setssdStorage(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>USB 2.0 Ports</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={usbTwoPointOPorts}
                            onChange={(e) => setusbTwoPointOPorts(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>USB C Ports</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={usbCPorts}
                            onChange={(e) => setusbCPorts(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Card Reader</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={cardReader}
                            onChange={(e) => setcardReader(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Web Cam</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={webCam}
                            onChange={(e) => setwebCam(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Wi-Fi</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={wifi}
                            onChange={(e) => setwifi(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Operating system</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={operatingSystem}
                            onChange={(e) => setoperatingSystem(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Manufacturer's warranty</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={manufacturersWarantty}
                            onChange={(e) => setmanufacturersWarantty(e.target.value)} />
                        </td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default LaptopInput;
