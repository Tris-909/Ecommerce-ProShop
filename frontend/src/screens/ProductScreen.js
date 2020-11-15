import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Row, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../redux/actions/productActions';

//! Product Components 
import ProductImage from '../components/ProductDetail/ProductImage';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductCard from '../components/ProductDetail/ProductCard';

const ProductScreen = ({ match }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleProduct(match.params.id));
    }, [dispatch, match.params.id]);

    const {singleProduct, loading, error} = useSelector(state => state.singleProduct);

    const checkIfErrorExisted = () => {
        if (error) {
            return (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Something went wrong :(</Alert.Heading>
                </Alert>
            );
        } else {
            if (!loading && singleProduct) {
                return(
                    <>
                        <Link className="btn btn-dark my-3" to="/">Go Back</Link>
                        <Row>   
                            <ProductImage 
                                image={singleProduct.image} 
                                name={singleProduct.name} 
                            />
                            <ProductInfo 
                                name={singleProduct.name}
                                price={singleProduct.price}
                                rating={singleProduct.rating}
                                description={singleProduct.description}
                                numReviews={singleProduct.numReviews}
                            />
                            <ProductCard 
                                price={singleProduct.price}
                                countInStock={singleProduct.countInStock}
                                id={match.params.id}
                            />
                        </Row>
                    </>
                );
            } else {
                return(
                    <Spinner animation="border" size="lg" style={{ width: '100px', height: '100px' }} /> 
                )
            }
        }
    }

    return (
        checkIfErrorExisted()
    );
}

export default ProductScreen;
