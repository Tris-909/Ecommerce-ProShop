import React, {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Helmet from '../components/Helmet';
import {getAllGames} from '../redux/actions/gameActions';

const GamesScreen = () => {
    const dispatch = useDispatch();
    const { allGames, loading, error } = useSelector(state => state.allGames);
    
    useEffect(() => {
        if (allGames.length === 0) {
            dispatch(getAllGames());
        }
    }, [dispatch, allGames]);

    return(
        <>
            <Helmet title="Gaming | ProShop" />
            <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                {loading ? <Loading /> : error ? <Message variant="danger" content="Something is wrong, please reload the webpage" /> : allGames.map((game) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={4} key={game._id}>
                            <Product product={game} link={`/product`}/>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default GamesScreen;