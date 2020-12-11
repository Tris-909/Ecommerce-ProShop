import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Row, Alert, Col, ListGroup, Form, Button, Table  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleLaptopBasedOnId } from '../redux/actions/laptopActions';
import { createReview } from '../redux/actions/userActions';
import { GET_A_LAPTOP_RESET } from '../redux/actions/actionTypes';

//! Product Components 
import ProductImage from '../components/ProductDetail/ProductImage';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductCard from '../components/ProductDetail/ProductCard';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Rating from '../components/Rating';
import Helmet from '../components/Helmet';

const SingleLaptopScreen = ({ match }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const {singleLaptop, loading, error} = useSelector(state => state.singleLaptop);
    const {success: userReviewSuccess, error: userReviewError } = useSelector(state => state.userReview);
    const { user } = useSelector(state => state.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleLaptopBasedOnId(match.params.id));
    }, [dispatch, match.params.id, userReviewSuccess]);

    const onSubmitReviewHandler = (e) => {
        e.preventDefault();
        dispatch({ type: GET_A_LAPTOP_RESET });
        dispatch(createReview( rating, comment, singleLaptop._id ));
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
            if (!loading && singleLaptop) {
                return(
                    <>
                        <Helmet title={singleLaptop.name} href={singleLaptop._id} />
                        <Link className="btn btn-dark my-3" to="/">Go Back</Link>
                        <Row>   
                            <ProductImage 
                                image={singleLaptop.image} 
                                name={singleLaptop.name} 
                                laptop
                            />
                            <ProductCard 
                                price={singleLaptop.price}
                                countInStock={singleLaptop.countInStock}
                                id={match.params.id}
                                laptop
                            />
                        </Row>
                        <Row>
                        <ProductInfo 
                                name={singleLaptop.name}
                                price={singleLaptop.price}
                                rating={singleLaptop.rating}
                                description={singleLaptop.description}
                                numReviews={singleLaptop.numReviews}
                                laptop
                        />
                        </Row>
                        <Row style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                            <Col md={8}>
                                <h2> Details : </h2>
                                <Table striped bordered hover>
                                  <thead>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Display Size (inches)</td>
                                      <td>{singleLaptop.details[0].displaySizeInches}</td>
                                    </tr>
                                    <tr>
                                      <td>Resolution (Pixels)</td>
                                      <td>{singleLaptop.details[0].resolutionPixels}</td>
                                    </tr>
                                    <tr>
                                      <td>Screen Resolution</td>
                                      <td>{singleLaptop.details[0].screenResolution}</td>
                                    </tr>
                                    <tr>
                                      <td>Display type</td>
                                      <td>{singleLaptop.details[0].displayType}</td>
                                    </tr>
                                    <tr>
                                      <td>Processor Type</td>
                                      <td>{singleLaptop.details[0].proccessorType}</td>
                                    </tr>
                                    <tr>
                                      <td>Processor Cores</td>
                                      <td>{singleLaptop.details[0].proccessorCores}</td>
                                    </tr>
                                    <tr>
                                      <td>Processor Memory Cache</td>
                                      <td>{singleLaptop.details[0].processorMemoryCache}</td>
                                    </tr>
                                    <tr>
                                      <td>Processor Clock Speed (GHz)</td>
                                      <td>{singleLaptop.details[0].processorClockSpeed}</td>
                                    </tr>
                                    <tr>
                                      <td>Processor Max. Clock Speed (GHz)</td>
                                      <td>{singleLaptop.details[0].processorMaxClockSpeed}</td>
                                    </tr>
                                    <tr>
                                      <td>Graphics processor</td>
                                      <td>{singleLaptop.details[0].graphicsProcessor}</td>
                                    </tr>
                                    <tr>
                                      <td>RAM (GB)</td>
                                      <td>{singleLaptop.details[0].ram}</td>
                                    </tr>
                                    <tr>
                                      <td>SSD Storage</td>
                                      <td>{singleLaptop.details[0].ssdStorage}</td>
                                    </tr>
                                    <tr>
                                      <td>USB 2.0 Ports</td>
                                      <td>{singleLaptop.details[0].usbTwoPointOPorts}</td>
                                    </tr>
                                    <tr>
                                      <td>USB C Ports</td>
                                      <td>{singleLaptop.details[0].usbCPorts}</td>
                                    </tr>
                                    <tr>
                                      <td>Card Reader</td>
                                      <td>{singleLaptop.details[0].cardReader}</td>
                                    </tr>
                                    <tr>
                                      <td>Web Cam</td>
                                      <td>{singleLaptop.details[0].webCam}</td>
                                    </tr>
                                    <tr>
                                      <td>Wi-Fi</td>
                                      <td>{singleLaptop.details[0].wifi}</td>
                                    </tr>
                                    <tr>
                                      <td>Operating system</td>
                                      <td>{singleLaptop.details[0].operatingSystem}</td>
                                    </tr>
                                    <tr>
                                      <td>Manufacturer's warranty</td>
                                      <td>{singleLaptop.details[0].manufacturersWarantty}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <h2>Reviews</h2>
                                { singleLaptop.reviews.length === 0 ? (
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
                                        { singleLaptop.reviews.map((review) => (
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

export default SingleLaptopScreen;
