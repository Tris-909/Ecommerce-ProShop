import React, {useEffect} from 'react'
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

//TODO: Actions
import {getCarouselProducts} from '../redux/actions/productActions';
import {getWishList} from '../redux/actions/wishListActions';
import {getAllItemsCart} from '../redux/actions/cartActions';
import {getTopProductsForHomeScreen} from '../redux/actions/topProductsAction';

//TODO: Components
import TopProduct from '../components/TopProduct (Home)/TopProduct';
import TopProductWithImages from '../components/TopProduct (Home)/TopProductWithImages';
import CarouselSection from '../components/Carousel';
import Helmet from '../components/Helmet';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { carouselProducts, loading: carouselLoading, error: carouselError } = useSelector(state => state.carouselProducts);
    const { wishList } = useSelector(state => state.wishList);
    const { cartItems, addItemSuccess } = useSelector(state => state.cart);
    const { 
        loading: topProductsLoading, 
        topPhones, 
        topLaptops, 
        topTVs, 
        topHeadphones, 
        topGames, 
        error } = useSelector(state => state.topProductsReducer);
    const { success: addItemToWishListSuccess} = useSelector(state => state.addItemToWishList);
    const { success: removeItemFromWishListSuccess} = useSelector(state => state.removeItemFromWishList);

    useEffect(() => {
        dispatch(getCarouselProducts());
        dispatch(getTopProductsForHomeScreen('laptops'));
        dispatch(getTopProductsForHomeScreen('tvs'));
        dispatch(getTopProductsForHomeScreen('phones'));
        dispatch(getTopProductsForHomeScreen('headphone'));
        dispatch(getTopProductsForHomeScreen('game'));

    }, [dispatch])

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
        if (error) {
            return (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Something went wrong :(</Alert.Heading>
                    <p> {error.message} </p>
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
                                loading={topProductsLoading} 
                                itemArray={topLaptops} 
                                title="Our Top Tier Laptops" 
                                itemLink="/product"
                                listItemLink="/laptops"
                            />
                        ) : null
                    }

                    {
                        topTVs.length !== 0 ? (      
                            <TopProduct 
                                loading={topProductsLoading} 
                                itemArray={topTVs} 
                                title="Best TVs for 2020" 
                                itemLink="/product"
                                listItemLink="/tvs"
                            />
                        ) : null
                    }

                    {
                        topPhones.length !== 0 ? (
                            <TopProduct 
                                loading={topProductsLoading}
                                itemArray={topPhones}
                                title="New Phones 2020"
                                itemLink="/product"
                                listItemLink="/phones"
                            />
                        ) : null
                    }

                    {
                        topHeadphones.length !== 0 ? (
                            <TopProduct 
                                loading={topProductsLoading}
                                itemArray={topHeadphones}
                                title="Great Headphones for You"
                                itemLink="/product"
                                listItemLink="/headphone"
                            />
                        ) : null  
                    }

                    {
                        topGames.length !== 0 ? (
                            <TopProduct 
                                loading={topProductsLoading}
                                itemArray={topGames}
                                title="For Game Lovers"
                                itemLink="/product"
                                listItemLink="/game"
                            />
                        ) : null  
                    }

                    {
                        topGames.length !== 0 ? (
                            <TopProductWithImages 
                                itemArray={topGames}
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
