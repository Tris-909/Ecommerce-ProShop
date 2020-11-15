import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Image, ListGroup, Card, Button, Alert, Spinner } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../redux/actions/productActions';

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
                    <p> {error.message} </p>
                </Alert>
            );
        } else {
            if (!loading && singleProduct) {
                return(
                    <>
                        <Link className="btn btn-dark my-3" to="/">Go Back</Link>
                        <Row>
                                <Col md={5}>
                                    <Image src={singleProduct.image} alt={singleProduct.name} fluid />
                                </Col>
                                <Col md={4}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{singleProduct.name}</h3>
                                            <h4>Price: ${singleProduct.price}</h4>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Rating rating={singleProduct.rating} text={`${singleProduct.numReviews} reviews`} />
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Description: {singleProduct.description}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>
                                                        Price:
                                                    </Col>
                                                    <Col>
                                                        <strong>${singleProduct.price}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>
                                                        Status:
                                                    </Col>
                                                    <Col>
                                                        <strong>{singleProduct.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Button 
                                                    className="btn-block" 
                                                    type="button"
                                                    disabled={singleProduct.countInStock === 0}>
                                                        ADD TO CART
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
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
