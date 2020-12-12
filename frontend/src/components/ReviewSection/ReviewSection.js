import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { createReview } from '../../redux/actions/userActions';
import { CREATE_REVIEW_RESET } from '../../redux/actions/actionTypes';
import Message from '../Message';
import Rating from '../../components/Rating';

const ReviewSection = ({ singleProduct, user, userReviewError }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const onSubmitReviewHandler = (e) => {
        e.preventDefault();
        dispatch({ type: CREATE_REVIEW_RESET });
        dispatch(createReview( rating, comment, singleProduct._id ));
        setRating(0);
        setComment('');
    }

    return (
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
    )
}

export default ReviewSection
