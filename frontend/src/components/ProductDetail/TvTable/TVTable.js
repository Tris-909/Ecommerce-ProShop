import React from 'react'
import { Row, Col, Table } from 'react-bootstrap';

const TVTable = (props) => {
    const TVDetail = props.tvsDetail; 
    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={8}>
                <h2> Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Screen Size (inches)</td>
                      <td>{TVDetail.screenSizes}</td>
                    </tr>
                    <tr>
                      <td>Screen Type</td>
                      <td>{TVDetail.screenType}</td>
                    </tr>
                    <tr>
                      <td>Screen Resolution</td>
                      <td>{TVDetail.screenResolution}</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixels)</td>
                      <td>{TVDetail.resolutionInPixel}</td>
                    </tr>
                    <tr>
                      <td>Refresh Rate</td>
                      <td>{TVDetail.refreshRate}</td>
                    </tr>
                    <tr>
                      <td>Wifi</td>
                      <td>{TVDetail.wifi}</td>
                    </tr>
                    <tr>
                      <td>USB Ports</td>
                      <td>{TVDetail.usbPorts}</td>
                    </tr>
                    <tr>
                      <td>Height x Width x Depth</td>
                      <td>{TVDetail.sizeHeightWidthDepth}</td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>{TVDetail.warranty}</td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TVTable;
