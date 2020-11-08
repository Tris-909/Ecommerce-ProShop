import React from 'react'
import Product from '../components/Product';
import products from '../products';
import { Col, Row} from 'react-bootstrap';

function HomeScreen() {
    return (
        <>
         <h1>Latest Product : </h1>
         <Row>
             {products.map((product) => {
                 return(
                     <Col sm={12} md={6} lg={6} xl={4} key={product._id}>
                        <Product product={product}/>
                     </Col>
                 );
             })}
         </Row>   
        </>
    )
}

export default HomeScreen
