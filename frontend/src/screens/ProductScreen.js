import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Row, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../redux/actions/productActions';

//! Product Components 
import ProductImage from '../components/ProductDetail/ProductImage';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductCard from '../components/ProductDetail/ProductCard';
import ReviewSection from '../components/ReviewSection/ReviewSection';
import Loading from '../components/Loading';
import Helmet from '../components/Helmet';
import LapTopTable from '../components/ProductDetail/LaptopTable/LapTopTable';
import TVTable from '../components/ProductDetail/TvTable/TVTable';
import PhoneTable from '../components/ProductDetail/PhoneTable/PhoneTable';
import HeadphoneTable from '../components/ProductDetail/HeadphoneTable/HeadphoneTable';
import GameTable from '../components/ProductDetail/GameTable/GameTable';

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch();

    const {singleProduct, loading, error} = useSelector(state => state.singleProduct);
    const {success: userReviewSuccess, error: userReviewError } = useSelector(state => state.userReview);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getSingleProduct(match.params.id));
    }, [dispatch, match.params.id, userReviewSuccess]);

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
                        {
                            singleProduct && user  ? (
                                <ReviewSection singleProduct={singleProduct} user={user} userReviewError={userReviewError} />
                            ) : null
                        }
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
