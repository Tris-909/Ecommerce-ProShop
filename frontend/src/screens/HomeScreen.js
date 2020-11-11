import React, {useState, useEffect} from 'react'
import Product from '../components/Product';
import { Col, Row} from 'react-bootstrap';
import axios from 'axios';

function HomeScreen() {
    const [products, setProducts] = useState(null);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('api/products');
            setProducts(data);
        }

        fetchProducts();
    }, [])

    return (
        <>
         <h1>Latest Product : </h1>
         <Row>
             {products ? products.map((product) => {
                 return(
                     <Col sm={12} md={6} lg={6} xl={4} key={product._id}>
                        <Product product={product}/>
                     </Col>
                 );
             }) : null}
         </Row>   
        </>
    )
}

export default HomeScreen
