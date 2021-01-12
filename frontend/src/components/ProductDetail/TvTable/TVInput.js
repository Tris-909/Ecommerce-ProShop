import React from 'react'
import { Row, Col, Table, Form } from 'react-bootstrap';

const TVInput = (props) => {
    const {
        screenSizes,
        setscreenSizes,

        screenType,
        setscreenType,

        screenResolution,
        setscreenResolution,

        resolutionInPixel,
        setresolutionInPixel,

        refreshRate,
        setrefreshRate,

        wifi,
        setwifi,

        usbPorts,
        setusbPorts,

        sizeHeightWidthDepth,
        setsizeHeightWidthDepth,

        warranty,
        setwarranty
    } = props;

    return (
        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <Col md={12}>
                <h2> TVs Details : </h2>
                <Table striped bordered hover>
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Screen Size (inches)</td>
                      <td>
                        <Form.Control 
                            type='text'
                            value={screenSizes}
                            onChange={(e) => setscreenSizes(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Screen Type</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={screenType}
                            onChange={(e) => setscreenType(e.target.value)} />
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
                      <td>Resolution (pixels)</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={resolutionInPixel}
                            onChange={(e) => setresolutionInPixel(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Refresh Rate</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={refreshRate}
                            onChange={(e) => setrefreshRate(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Wifi</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={wifi}
                            onChange={(e) => setwifi(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>USB Ports</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={usbPorts}
                            onChange={(e) => setusbPorts(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Height x Width x Depth</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={sizeHeightWidthDepth}
                            onChange={(e) => setsizeHeightWidthDepth(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>
                      <Form.Control 
                            type='text'
                            value={warranty}
                            onChange={(e) => setwarranty(e.target.value)} />
                        </td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TVInput;
