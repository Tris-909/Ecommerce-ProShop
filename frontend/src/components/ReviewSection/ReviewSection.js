import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Button, ListGroup, ProgressBar  } from 'react-bootstrap';
import { createReview, deleteReview } from '../../redux/actions/userActions';
import { CREATE_REVIEW_RESET, DELETE_REVIEW_RESET } from '../../redux/actions/actionTypes';
import { Link } from 'react-router-dom';
import Message from '../Message';
import Rating from '../../components/Rating';
import styled from 'styled-components';

const ReviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
`;

const NoReviewText = styled.div`
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`;

const ReviewOverallContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
`;

const RatingOverallText = styled.div`
    font-size: 1.5rem;
    font-family: Rokkitt;
`;

const ReviewOverallProgressBarContainer = styled.div`
    margin-top: 10px;
    display: flex;
`;

const ReviewSection = ({ singleProduct, user, userReviewError, deleteReviewError }) => {
    const dispatch = useDispatch();
    //TODO: TO POST A RATING
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    //TODO: TO CALCULATE INFO FOR PROGRESS BAR
    const [numOf5StarsReviews, setNumOf5StarReviews] = useState(0);
    const [numOf4StarsReviews, setNumOf4StarReviews] = useState(0);
    const [numOf3StarsReviews, setNumOf3StarReviews] = useState(0);
    const [numOf2StarsReviews, setNumOf2StarReviews] = useState(0);
    const [numOf1StarsReviews, setNumOf1StarReviews] = useState(0);

    const onSubmitReviewHandler = (e) => {
        e.preventDefault();
        dispatch({ type: CREATE_REVIEW_RESET });
        dispatch(createReview( rating, comment, singleProduct._id ));
        setRating(0);
        setComment('');
    }

    const onDeleteReviewHandler = (e, reviewId) => {
        e.preventDefault();
        dispatch({ type: DELETE_REVIEW_RESET });
        dispatch(deleteReview(singleProduct._id, reviewId));
    }


    return (
        <Row>
            <Col md={6}>
                <h2>Reviews :</h2>
                <ReviewOverallContainer>
                    <RatingOverallText> Rating SnapShot </RatingOverallText>
                    <ReviewOverallProgressBarContainer>
                        5 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={100} label style={{width: '100%'}} />
                    </ReviewOverallProgressBarContainer>
                    <ReviewOverallProgressBarContainer>
                        4 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={0} label style={{width: '100%'}} />
                    </ReviewOverallProgressBarContainer>
                    <ReviewOverallProgressBarContainer>
                        3 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={0} label style={{width: '100%'}} />
                    </ReviewOverallProgressBarContainer>
                    <ReviewOverallProgressBarContainer>
                        2 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={0} label style={{width: '100%'}} />
                    </ReviewOverallProgressBarContainer>
                    <ReviewOverallProgressBarContainer>
                        1 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={0} label style={{width: '100%'}} />
                    </ReviewOverallProgressBarContainer>
                </ReviewOverallContainer>
                {
                    deleteReviewError ? (
                        <Message content="Delete Review Failed, Please Try Again :(" variant="danger" />
                    ) : null
                }
                { singleProduct.reviews.length == 0 ? (
                    <>
                        <NoReviewText>
                            No Reviews 
                        </NoReviewText>
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
                            ) : (
                                <NoReviewText>
                                    You need to <Link to="/login" style={{ textDecoration: 'underline' }}> sign in </Link> to post a review
                                </NoReviewText>
                            )}
                    </>
                    ) : (
                    <ListGroup variant="flush">
                        { singleProduct.reviews.map((review) => (
                            <ListGroup.Item key={review._id}>
                                <ReviewContainer>
                                    <strong>{review.name}</strong>
                                    <i 
                                        className="fas fa-trash" 
                                        style={{ cursor: 'pointer' }}
                                        onClick={(e) => onDeleteReviewHandler(e, review._id)}></i>
                                </ReviewContainer>

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
