import React, {useState, useEffect} from 'react'
import { Row, Col, Pagination } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Helmet from '../components/Helmet';
import {getListOfProductsBasedOnCategory} from '../redux/actions/productActions';
import LoadingScreen from '../components/LoadingScreen';

const ListScreen = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState(null);
    const { productsList, page, pages, loading, error } = useSelector(state => state.listProducts);
    
    useEffect(() => {
        async function setCat(){
            await setCategory(window.location.pathname.split('/')[1]);
        }

        setCat(); 
    }, []);

    useEffect(() => {
        dispatch(getListOfProductsBasedOnCategory( category, 0)); 
    }, [dispatch, category]);

    const getNextSetOfReviews = (e, nextpage) => {
        e.preventDefault();
        dispatch(getListOfProductsBasedOnCategory(category, nextpage-1));
    }

    return(
        <>
            {category ? <Helmet title={`${category.toUpperCase()} | ProShop`} /> : null}
            <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                {loading ? <LoadingScreen /> : error ? <Message variant="danger" content="Something is wrong, please reload the webpage" /> : productsList.map((item) => {
                    return(
                        <Col sm={12} md={6} lg={6} xl={4} key={item._id}>
                            <Product product={item} link={`/product`}/>
                        </Col>
                    );
                })}
                { !loading ? 
                pages === 1 ? null : (
                    <Pagination>
                        { 
                            Array.from(Array(pages), (e , i) => {
                                return(<Pagination.Item key={i} onClick={(e) => getNextSetOfReviews(e, i+1)}>{i+1}</Pagination.Item>)
                            })
                        }
                    </Pagination>
                ) : null
                }
            </Row>
        </>
    );
}

export default ListScreen;