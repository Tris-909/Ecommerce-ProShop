import React, {useEffect} from 'react'
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

//TODO: Actions
import {getCarouselProducts} from '../redux/actions/productActions';
import {getTopTiersLaptop} from '../redux/actions/laptopActions';
import {getTopTVs} from '../redux/actions/tvActions';
import {getTopPhones} from '../redux/actions/phoneActions';
import {getTopHeadphone} from '../redux/actions/headphoneActions';
import {getTopGames} from '../redux/actions/gameActions';
import {getWishList} from '../redux/actions/wishListActions';
import {getAllItemsCart} from '../redux/actions/cartActions';

//TODO: Components
import TopProduct from '../components/TopProduct (Home)/TopProduct';
import CarouselSection from '../components/Carousel';
import Helmet from '../components/Helmet';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { carouselProducts, loading: carouselLoading, error: carouselError } = useSelector(state => state.carouselProducts);
    const { topLaptops, loading: topLaptopLoading, error: topLaptopError } = useSelector(state => state.topLaptops);
    const { topTV, loading: topTVLoading } = useSelector(state => state.topTVs);
    const { topPhones, loading: topPhonesLoading } = useSelector(state => state.topPhones);
    const { topHeadphone, loading: topHeadphoneLoading } = useSelector(state => state.topHeadphone);
    const { topGames, loading: topGamesLoading } = useSelector(state => state.topGames);
    const { wishList } = useSelector(state => state.wishList);
    const { cartItems, addItemSuccess } = useSelector(state => state.cart);
    const { success: addItemToWishListSuccess} = useSelector(state => state.addItemToWishList);
    const { success: removeItemFromWishListSuccess} = useSelector(state => state.removeItemFromWishList);

    useEffect(() => {
        //TODO: Get carousel products for the first time 
        if (carouselProducts.length === 0) {
            dispatch(getCarouselProducts());
        }
    }, [dispatch, carouselProducts]);

    useEffect(() => {
        //TODO: Get top laptops for the first time 
        if (topLaptops.length === 0) {
            dispatch(getTopTiersLaptop());
        }
    }, [dispatch, topLaptops]);

    useEffect(() => {
        //TODO: Get top tvs for the first time 
        if (topTV.length === 0) {
            dispatch(getTopTVs());
        }
    }, [dispatch, topTV]);

    useEffect(() => {
        //TODO: Fetch top-phone for the first time
        if (topPhones.length === 0) {
            dispatch(getTopPhones());
        }
    }, [dispatch, topPhones]);

    useEffect(() => {
        //TODO: Fetch top-headphone for the first time
        if (topHeadphone.length === 0) {
            dispatch(getTopHeadphone());
        }
    }, [dispatch, topHeadphone]);

    useEffect(() => {
        //TODO: Fetch top-games for the first time
        if (topGames.length === 0) {
            dispatch(getTopGames());
        }
    }, [dispatch, topGames]);

    useEffect(() => {
        //TODO: Fetch Wishlist for the first time if needed
        if (wishList.length === 0 || addItemToWishListSuccess || removeItemFromWishListSuccess) {
            dispatch(getWishList());
        } 
    }, [dispatch, addItemToWishListSuccess, removeItemFromWishListSuccess]);

    useEffect(() => {
        dispatch(getAllItemsCart());
    }, [addItemSuccess])

    const checkIfErrorExisted = () => {
        if (topLaptopError) {
            return (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Something went wrong :(</Alert.Heading>
                    <p> {topLaptopError.message} </p>
                </Alert>
            );
        } else {
            return(
                <>
                    <Helmet title="Proshop | Electronics " href="/" />
                
                    <CarouselSection 
                        carouselProducts={carouselProducts} 
                        loading={carouselLoading} 
                        error={carouselError} 
                    />

                    {
                        topLaptops.length !== 0 ? (
                            <TopProduct 
                                loading={topLaptopLoading} 
                                itemArray={topLaptops} 
                                title="Our Top Tier MSI Laptops" 
                                itemLink="/product"
                                listItemLink="/laptops"
                            />
                        ) : null
                    }

                    {
                        topTV.length !== 0 ? (      
                            <TopProduct 
                                loading={topTVLoading} 
                                itemArray={topTV} 
                                title="Best TVs for 2020" 
                                itemLink="/product"
                                listItemLink="/tvs"
                            />
                        ) : null
                    }

                    {
                        topPhones.length !== 0 ? (
                            <TopProduct 
                                loading={topPhonesLoading}
                                itemArray={topPhones}
                                title="New Phones 2020"
                                itemLink="/product"
                                listItemLink="/phones"
                            />
                        ) : null
                    }

                    {
                        topHeadphone.length !== 0 ? (
                            <TopProduct 
                                loading={topHeadphoneLoading}
                                itemArray={topHeadphone}
                                title="Great Headphones for You"
                                itemLink="/product"
                                listItemLink="/headphone"
                            />
                        ) : null  
                    }

                    {
                        topGames.length !== 0 ? (
                            <TopProduct 
                                loading={topGamesLoading}
                                itemArray={topGames}
                                title="For Game Lovers"
                                itemLink="/product"
                                listItemLink="/game"
                            />
                        ) : null  
                    }
                </>
            )
        }
    }

    return(checkIfErrorExisted());
}

export default HomeScreen;
