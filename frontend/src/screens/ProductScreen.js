import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../redux/actions/productActions';
import {
    getAlsoLikeProducts
} from '../redux/actions/youMayAlsoLike';
import {
    GET_ALSOLIKE_RESET
} from '../redux/actions/actionTypes';
import styled from 'styled-components';

//! Product Components 
import ProductImage from '../components/ProductDetail/ProductImage';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductCard from '../components/ProductDetail/ProductCard';
import ReviewSection from '../components/ReviewSection/ReviewSection';
import LoadingScreen from '../components/LoadingScreen';
import Helmet from '../components/Helmet';
import Loading from '../components/Loading';
import LapTopTable from '../components/ProductDetail/LaptopTable/LapTopTable';
import TVTable from '../components/ProductDetail/TvTable/TVTable';
import PhoneTable from '../components/ProductDetail/PhoneTable/PhoneTable';
import HeadphoneTable from '../components/ProductDetail/HeadphoneTable/HeadphoneTable';
import GameTable from '../components/ProductDetail/GameTable/GameTable';
import AlsoLikeProduct from '../components/AlsoLike/AlsoLikeProduct';

const YouMayAlsoLikeText = styled.div`
    font-size: 2.5rem;
    text-align: center;
    font-family: Rokkit;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch();
    
    const {singleProduct, loading, error} = useSelector(state => state.singleProduct);
    const { alsoLikeItems, loading: alsoLikeLoading, error: alsoLikeError } = useSelector(state => state.alsoLike);
    const {success: userReviewSuccess, error: userReviewError } = useSelector(state => state.userReview);
    const {success: deleteReviewSuccess, error:  deleteReviewError } = useSelector(state => state.deleteReview);
    const { success: addItemToWishListSuccess} = useSelector(state => state.addItemToWishList);
    const { success: removeItemFromWishListSuccess} = useSelector(state => state.removeItemFromWishList);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        async function getProduct() {
            await dispatch(getSingleProduct(match.params.id));
        }
        dispatch({ type: GET_ALSOLIKE_RESET });
        
        getProduct();
    }, [dispatch, match.params.id, userReviewSuccess, deleteReviewSuccess]);

    useEffect(() => {
        if (singleProduct) {
            if (singleProduct.category === 'laptops') {
                dispatch(getAlsoLikeProducts('laptops'));
            } else if (singleProduct.category === 'tvs') {
                dispatch(getAlsoLikeProducts('tvs'));
            } else if (singleProduct.category === 'phones') {
                dispatch(getAlsoLikeProducts('phones'));
            } else if (singleProduct.category === 'headphone') {
                dispatch(getAlsoLikeProducts('headphone'));
            } else {
                dispatch(getAlsoLikeProducts('game'));
            }
        }
    }, [dispatch, singleProduct, addItemToWishListSuccess, removeItemFromWishListSuccess]);

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
                            <ProductCard 
                                price={singleProduct.price}
                                onSale={singleProduct.onSale}
                                name={singleProduct.name}
                                image={singleProduct.image}
                                countInStock={singleProduct.countInStock}
                                id={match.params.id}
                            />
                        </Row>
                        <Row>
                            <ProductInfo 
                                name={singleProduct.name}
                                price={singleProduct.price}
                                rating={singleProduct.rating}
                                description={singleProduct.description}
                                numReviews={singleProduct.numReviews}
                            />
                        </Row>
                        {
                            singleProduct.youtube ? (
                                <Row>
                                    <iframe title={singleProduct.name} width="100%" height="500" src={singleProduct.youtube} frameBorder="0" allowFullScreen></iframe>
                                </Row>
                            ) : null
                        }
                        {
                            singleProduct.details.proccessorCores ? (
                                <LapTopTable singleLaptop={singleProduct} />
                            ) : null
                        }
                        {
                            singleProduct.tvsDetail.sizeHeightWidthDepth ? (
                                <TVTable tvsDetail={singleProduct.tvsDetail} />
                            ) : null
                        }
                        {
                            singleProduct.phoneDetail.DualSim ? (
                                <PhoneTable singlePhone={singleProduct} />
                            ) : null
                        }
                        {
                            singleProduct.headphoneDetail.HeadphoneType ? (
                                <HeadphoneTable singleHeadphonePhone={singleProduct} />
                            ) : null
                        }                        
                        {
                            singleProduct.gameDetail.Platform ? (
                                <GameTable singleGame={singleProduct} />
                            ) : null
                        }

                        <ReviewSection 
                            singleProduct={singleProduct} 
                            user={user} 
                            userReviewError={userReviewError} 
                            deleteReviewError={deleteReviewError} 
                        />

                        <Row style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <YouMayAlsoLikeText>You May Also Like</YouMayAlsoLikeText>
                            <Row>
                             { alsoLikeLoading ? <Loading /> : alsoLikeItems.length !== 0 ? alsoLikeItems.map((item) => {
                                const product = {
                                    itemId: item._id,
                                    productName: item.name,
                                    productPrice: item.price,
                                    onSale: item.onSale,
                                    productImage: item.image,
                                    numReviews: item.numReviews,
                                    rating: item.rating,
                                    newProduct: item.newProduct,
                                    preOrder: item.preOrder
                                }
                                return (
                                    <Col key={item._id} sm={6} md={4} lg={4} xl={4} style={{marginTop: '1rem', minHeight: '350px'}}>
                                        <AlsoLikeProduct product={product} />
                                    </Col>
                                )}
                              ) : null }
                            </Row>
                        </Row>
                    </>
                );
            } else {
                return( <LoadingScreen /> );                
            }
        }
    }

    return (
        checkIfErrorExisted()
    );
}

export default ProductScreen;
