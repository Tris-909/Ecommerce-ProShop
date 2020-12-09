import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Row, Alert, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../redux/actions/productActions';
import { createReview } from '../redux/actions/userActions';
import { CREATE_REVIEW_RESET } from '../redux/actions/actionTypes';

//! Product Components 
import ProductImage from '../components/ProductDetail/ProductImage';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductCard from '../components/ProductDetail/ProductCard';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Rating from '../components/Rating';
import Helmet from '../components/Helmet';

const ProductScreen = ({ match }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const {singleProduct, loading, error} = useSelector(state => state.singleProduct);
    const {success: userReviewSuccess, error: userReviewError } = useSelector(state => state.userReview);
    const { user } = useSelector(state => state.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleProduct(match.params.id));
    }, [dispatch, match.params.id, userReviewSuccess]);

    const onSubmitReviewHandler = (e) => {
        e.preventDefault();
        dispatch({ type: CREATE_REVIEW_RESET });
        dispatch(createReview( rating, comment, singleProduct._id ));
        setRating(0);
        setComment('');
    }

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
                        <Helmet title={singleProduct.name} href={singleProduct._id} />
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
                        <Row>
                            <Col md={6}>
                                <h2>Reviews</h2>
                                { singleProduct.reviews.length === 0 ? (
                                    <>
                                        <Message content="No Review" variant="secondary" />
                                        { user ? (
                                                <Form onSubmit={onSubmitReviewHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label> Rating </Form.Label>
                                                        <Form.Control 
                                                            as='select' 
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}>
                                                                <option value=''>Select...</option>
                                                                <option value='1'>1 - Awful</option>
                                                                <option value='2'>2 - Bad</option>
                                                                <option value='3'>3 - Okay</option>
                                                                <option value='4'>4 - Good</option>
                                                                <option value='5'>5 - Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group controlId="comment">
                                                        <Form.Label> Comment </Form.Label>
                                                        <Form.Control 
                                                            as='textarea' 
                                                            row='3' 
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Button type="submit" className="btn btn-primary"> Submit </Button>
                                                </Form>
                                            ) : <Message content="You need to sign in to post a review" variant="primary" />}
                                    </>
                                    ) : (
                                    <ListGroup variant="flush">
                                        { singleProduct.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating rating={review.rating} />
                                                <p>{ review.createdAt.substring(0,10) }</p>
                                                <p>{ review.comment }</p>
                                            </ListGroup.Item>
                                        ))}
                                        <ListGroup.Item>
                                            <h2>Post A Review</h2>
                                            {userReviewError ? (
                                                <Message 
                                                    variant="danger" 
                                                    content={ userReviewError === 'User has already review this product'
                                                        ? userReviewError :"Something is wrong while we're trying to create the reviews, please reload the page" }/>
                                            ) : null}
                                            { user ? (
                                                <Form onSubmit={onSubmitReviewHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label> Rating </Form.Label>
                                                        <Form.Control 
                                                            as='select' 
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}>
                                                                <option value=''>Select...</option>
                                                                <option value='1'>1 - Awful</option>
                                                                <option value='2'>2 - Bad</option>
                                                                <option value='3'>3 - Okay</option>
                                                                <option value='4'>4 - Good</option>
                                                                <option value='5'>5 - Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group controlId="comment">
                                                        <Form.Label> Comment </Form.Label>
                                                        <Form.Control 
                                                            as='textarea' 
                                                            row='3' 
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Button type="submit" className="btn btn-primary"> Submit </Button>
                                                </Form>
                                            ) : <Message content="You need to sign in to post a review" variant="primary" />}
                                        </ListGroup.Item>
                                    </ListGroup>
                                )}
                            </Col>
                        </Row>
                    </>
                );
            } else {
                return( <Loading /> );                
            }
        }
    }

    return (
        checkIfErrorExisted()
    );
}

export default ProductScreen;
