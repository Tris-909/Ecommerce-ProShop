import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Button, ListGroup, ProgressBar, Pagination, NavDropdown  } from 'react-bootstrap';
import { createReview, deleteReview, getCurrentUserStatus } from '../../redux/actions/userActions';
import { getSetOfReviewsOfCurrentProductBasedOnPageNumber } from '../../redux/actions/productActions';
import { 
    CREATE_REVIEW_RESET, 
    DELETE_REVIEW_RESET, 
    GET_SET_REVIEWS_RESET
} from '../../redux/actions/actionTypes';
import { Link } from 'react-router-dom';
import Message from '../Message';
import Rating from '../../components/Rating';
import AgreeText from './AgreeOrDisAgree/AgreeText';
import DisAgreeTextContainer from './AgreeOrDisAgree/DisAgreeText';
import styled from 'styled-components';


const ReviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 800;
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

const FilterBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    background-color: #f1f1f1;
`;

const AgreeContainer = styled.div`
    display: flex;

    @media (max-width: 420px) {
        display: initial;
    }
`;


const ReviewSection = ({ singleProduct, user, userReviewError, deleteReviewError }) => {
    const dispatch = useDispatch();
    const { currentReviews, setAgreeSuccess ,setDisAgreeSuccess, pages, page, success } = useSelector(state => state.setOfReviews);
    const { userStatus } = useSelector(state => state.currentUserStatus);

    //TODO: LOAD A REVIEW FOR A FIRST-TIME
    const [firsttime, setFirstTime] = useState(true);

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
        if (rating == 0 || comment == '') {

        }
        dispatch(createReview( rating, comment, singleProduct._id ));
        setRating(0);
        setComment('');
    }

    const onDeleteReviewHandler = (e, reviewId) => {
        e.preventDefault();
        dispatch({ type: DELETE_REVIEW_RESET });
        dispatch(deleteReview(singleProduct._id, reviewId));
    }

    const getNextSetOfReviews = (e, nextPages) => {
        e.preventDefault();
        dispatch({ type: GET_SET_REVIEWS_RESET });
        dispatch(getSetOfReviewsOfCurrentProductBasedOnPageNumber(singleProduct._id, nextPages));
    }

    useEffect(() => {
        setNumOf5StarReviews(Math.ceil((singleProduct.numOf5StarsReviews/singleProduct.numReviews)*100));
        setNumOf4StarReviews(Math.ceil((singleProduct.numOf4StarsReviews/singleProduct.numReviews)*100));
        setNumOf3StarReviews(Math.ceil((singleProduct.numOf3StarsReviews/singleProduct.numReviews)*100));
        setNumOf2StarReviews(Math.ceil((singleProduct.numOf2StarsReviews/singleProduct.numReviews)*100));
        setNumOf1StarReviews(Math.ceil((singleProduct.numOf1StarsReviews/singleProduct.numReviews)*100));

        if (firsttime) {
            dispatch(getSetOfReviewsOfCurrentProductBasedOnPageNumber(singleProduct._id, 1));
            setFirstTime(false);
        }
        if (!userStatus) {
            dispatch(getCurrentUserStatus());
        }
    }, [dispatch, singleProduct, success]);

    useEffect(() => {
        dispatch(getCurrentUserStatus());
        // Adding an action to get that just clicked reviews to update it indepentdently
        // Or find a way to get that set of reviews again after update it
        dispatch(getSetOfReviewsOfCurrentProductBasedOnPageNumber(singleProduct._id, page));
    }, [dispatch, setAgreeSuccess, setDisAgreeSuccess]);

    return (
        <Row>
            <Col md={6}>
                <h2>Reviews :</h2>
                <ReviewOverallContainer>
                    <RatingOverallText> Rating SnapShot </RatingOverallText>
                    <ReviewOverallProgressBarContainer>
                        5 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={numOf5StarsReviews} label style={{width: '100%', marginRight: '10px'}} />
                        { singleProduct.numOf5StarsReviews }
                    </ReviewOverallProgressBarContainer>
                    <ReviewOverallProgressBarContainer>
                        4 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={numOf4StarsReviews} label style={{width: '100%', marginRight: '10px'}} />
                        { singleProduct.numOf4StarsReviews }
                    </ReviewOverallProgressBarContainer>
                    <ReviewOverallProgressBarContainer>
                        3 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={numOf3StarsReviews} label style={{width: '100%', marginRight: '10px'}} />
                        { singleProduct.numOf3StarsReviews }
                    </ReviewOverallProgressBarContainer>
                    <ReviewOverallProgressBarContainer>
                        2 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={numOf2StarsReviews} label style={{width: '100%', marginRight: '10px'}} />
                        { singleProduct.numOf2StarsReviews }
                    </ReviewOverallProgressBarContainer>
                    <ReviewOverallProgressBarContainer>
                        1 <i className="fas fa-star" style={{ marginRight: '1rem', marginLeft: '0.5rem' }}></i> 
                        <ProgressBar variant={"progresss-bar-css"} now={numOf1StarsReviews} label style={{width: '100%', marginRight: '10px'}} />
                        { singleProduct.numOf1StarsReviews }
                    </ReviewOverallProgressBarContainer>
                </ReviewOverallContainer>
                {
                    deleteReviewError ? (
                        <Message content="Delete Review Failed, Please Try Again :(" variant="danger" />
                    ) : null
                }
                <FilterBar>
                    <div>
                        {pages*5 > singleProduct.numReviews ? singleProduct.numReviews : pages*5 } of {singleProduct.numReviews} Reviews
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <NavDropdown title="Filter" id="nav-dropdown" style={{marginRight: '0rem'}}>
                            <NavDropdown.Item>Highest To Lowest Rating</NavDropdown.Item>
                            <NavDropdown.Item>Lowest To Highest Rating</NavDropdown.Item>
                            <NavDropdown.Item>Most Agree</NavDropdown.Item>
                            <NavDropdown.Item>Most Disagree</NavDropdown.Item>
                            <NavDropdown.Item>Most Recent</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </FilterBar>
                { currentReviews.length == 0 ? (
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
                        { currentReviews.map((review) => (
                            <ListGroup.Item key={review._id}>
                                <ReviewContainer>
                                    <strong>{review.name}</strong>
                                    
                                    { user ? user._id == review.user ? (
                                        <i 
                                        className="fas fa-trash" 
                                        style={{ cursor: 'pointer' }}
                                        onClick={(e) => onDeleteReviewHandler(e, review._id)}></i>
                                    ) : null  : null
                                    }
                                </ReviewContainer>

                                <Rating rating={review.rating} />
                                <p>{ review.createdAt.substring(0,10) }</p>
                                <p>{ review.comment }</p>

                                <AgreeContainer>
                                        Helpful ? 

                                        {
                                            userStatus ? (
                                                <AgreeText 
                                                    numOfAgrees={review.numOfAgrees}
                                                    useAgreeOrDisAgreeArray={userStatus.agreeAndDisAgree}
                                                    reviewID={review._id}
                                                    productID={singleProduct._id}
                                                />
                                            ) : (
                                                <AgreeText 
                                                numOfAgrees={review.numOfAgrees}
                                                useAgreeOrDisAgreeArray={[]}
                                                reviewID={review._id}
                                                productID={singleProduct._id}
                                            />
                                            )
                                        }
                                        {
                                            userStatus ? (
                                                <DisAgreeTextContainer 
                                                    numOfDisAgrees={review.numOfDisAgrees}
                                                    useAgreeOrDisAgreeArray={userStatus.agreeAndDisAgree}
                                                    reviewID={review._id}
                                                    productID={singleProduct._id}
                                                />
                                            ) : (
                                                <DisAgreeTextContainer 
                                                numOfDisAgrees={review.numOfDisAgrees}
                                                useAgreeOrDisAgreeArray={[]}
                                                reviewID={review._id}
                                                productID={singleProduct._id}
                                            /> 
                                            )
                                        }
                                </AgreeContainer>
                            </ListGroup.Item>
                        ))}
                        {
                            pages === 1 ? null : (
                                <Pagination>
                                    { 
                                        Array.from(Array(pages), (e , i) => {
                                            return(<Pagination.Item key={i} onClick={(e) => getNextSetOfReviews(e, i+1)}>{i+1}</Pagination.Item>)
                                        })
                                    }
                                </Pagination>
                            )
                        }
                        <ListGroup.Item>
                            <h2>Post A Review</h2>
                            {userReviewError ? (
                                <Message 
                                    variant="danger" 
                                    content={ userReviewError === 'User has already review this product'
                                        ? userReviewError :"Please fill in comment and rating" }/>
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
                                                <option value={1}>1 - Awful</option>
                                                <option value={2}>2 - Bad</option>
                                                <option value={3}>3 - Okay</option>
                                                <option value={4}>4 - Good</option>
                                                <option value={5}>5 - Excellent</option>
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
                        </ListGroup.Item>
                    </ListGroup>
                )}
            </Col>
        </Row>
    )
}

export default ReviewSection
