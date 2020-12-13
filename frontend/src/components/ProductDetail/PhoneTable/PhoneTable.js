import React from 'react'
import { Row, Col, Table } from 'react-bootstrap';

const PhoneTable = (props) => {
    const phoneInfo = props.singlePhone.phoneDetail;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={8}>
                <h2> Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Operating System</td>
                      <td>{phoneInfo.phoneOperatingSystem}</td>
                    </tr>
                    <tr>
                      <td>Network Compability</td>
                      <td>{phoneInfo.networkCompability}</td>
                    </tr>
                    <tr>
                      <td>Dual Sim</td>
                      <td>{phoneInfo.DualSim}</td>
                    </tr>
                    <tr>
                      <td>Colour</td>
                      <td>{phoneInfo.Colour}</td>
                    </tr>
                    <tr>
                      <td>Devices Screen</td>
                      <td>{phoneInfo.DeviceScreen}</td>
                    </tr>
                    <tr>
                      <td>Resolution</td>
                      <td>{phoneInfo.Resolution}</td>
                    </tr>
                    <tr>
                      <td>Internal Memory</td>
                      <td>{phoneInfo.InternalMemory}</td>
                    </tr>
                    <tr>
                      <td>Front Camera</td>
                      <td>{phoneInfo.FrontCamera}</td>
                    </tr>
                    <tr>
                      <td>Rear Camera</td>
                      <td>{phoneInfo.RearCamera}</td>
                    </tr>
                    <tr>
                      <td>Processor</td>
                      <td>{phoneInfo.Processor}</td>
                    </tr>
                    <tr>
                      <td>Wi-Fi</td>
                      <td>{phoneInfo.Wifi}</td>
                    </tr>
                    <tr>
                      <td>Manufacturer's warranty</td>
                      <td>{phoneInfo.Warranty}</td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default PhoneTable;
