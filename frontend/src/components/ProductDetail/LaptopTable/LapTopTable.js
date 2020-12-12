import React from 'react'
import { Row, Col, Table } from 'react-bootstrap';

const LapTopTable = (props) => {
    const laptopInfo = props.singleLaptop.details;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={8}>
                <h2> Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Display Size (inches)</td>
                      <td>{laptopInfo.displaySizeInches}</td>
                    </tr>
                    <tr>
                      <td>Resolution (Pixels)</td>
                      <td>{laptopInfo.resolutionPixels}</td>
                    </tr>
                    <tr>
                      <td>Screen Resolution</td>
                      <td>{laptopInfo.screenResolution}</td>
                    </tr>
                    <tr>
                      <td>Display type</td>
                      <td>{laptopInfo.displayType}</td>
                    </tr>
                    <tr>
                      <td>Processor Type</td>
                      <td>{laptopInfo.proccessorType}</td>
                    </tr>
                    <tr>
                      <td>Processor Cores</td>
                      <td>{laptopInfo.proccessorCores}</td>
                    </tr>
                    <tr>
                      <td>Processor Memory Cache</td>
                      <td>{laptopInfo.processorMemoryCache}</td>
                    </tr>
                    <tr>
                      <td>Processor Clock Speed (GHz)</td>
                      <td>{laptopInfo.processorClockSpeed}</td>
                    </tr>
                    <tr>
                      <td>Processor Max. Clock Speed (GHz)</td>
                      <td>{laptopInfo.processorMaxClockSpeed}</td>
                    </tr>
                    <tr>
                      <td>Graphics processor</td>
                      <td>{laptopInfo.graphicsProcessor}</td>
                    </tr>
                    <tr>
                      <td>RAM (GB)</td>
                      <td>{laptopInfo.ram}</td>
                    </tr>
                    <tr>
                      <td>SSD Storage</td>
                      <td>{laptopInfo.ssdStorage}</td>
                    </tr>
                    <tr>
                      <td>USB 2.0 Ports</td>
                      <td>{laptopInfo.usbTwoPointOPorts}</td>
                    </tr>
                    <tr>
                      <td>USB C Ports</td>
                      <td>{laptopInfo.usbCPorts}</td>
                    </tr>
                    <tr>
                      <td>Card Reader</td>
                      <td>{laptopInfo.cardReader}</td>
                    </tr>
                    <tr>
                      <td>Web Cam</td>
                      <td>{laptopInfo.webCam}</td>
                    </tr>
                    <tr>
                      <td>Wi-Fi</td>
                      <td>{laptopInfo.wifi}</td>
                    </tr>
                    <tr>
                      <td>Operating system</td>
                      <td>{laptopInfo.operatingSystem}</td>
                    </tr>
                    <tr>
                      <td>Manufacturer's warranty</td>
                      <td>{laptopInfo.manufacturersWarantty}</td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default LapTopTable;
