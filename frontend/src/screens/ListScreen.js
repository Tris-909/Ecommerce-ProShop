import React, {useState, useEffect} from 'react'
import { Row, Col, Pagination, Form } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Helmet from '../components/Helmet';
import {getListOfProductsBasedOnCategory} from '../redux/actions/productActions';
import LoadingScreen from '../components/LoadingScreen';
import styled from 'styled-components';

const FilterCard = styled.div`
    border: 1px solid rgba(0,0,0,0.125);
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
`;

const FilterTop = styled.div`
    background-color: rgb(252, 240, 3);
    color: black;
    font-size: 1rem;
    text-align: center;
    font-weight: 700;
    width: 100%;
`;

const FilterPriceCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    padding: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.125);
`;

const FilterPriceName = styled.div`
    font-size: 1rem;
    font-weight: 800;
    padding-left: 1rem;
    color: black;
`;

const FilterPriceInbox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1rem;
`;

const InputFilter = styled.input`
    width: 25%;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
`;

const PriceGoButton = styled.button`
    height: 100%;
    background-color: black;
    color: white;
    font-size: 1rem;
    font-weight: 800;
    padding: 10px;
    border: none;
`;

const CurrentPageName = styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 800; 
`;

const ListScreen = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState(null);
    const { productsList, brands, pages, loading, error } = useSelector(state => state.listProducts);
    
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
            <CurrentPageName> {category ? category.toUpperCase() : null} </CurrentPageName>
            <Row>
                <Col sm={12} md={3} lg={3} xl={3}>
                    <FilterCard>
                        <FilterTop>Filters</FilterTop>
                        <FilterPriceCard>
                            <FilterPriceName>
                                Price
                            </FilterPriceName>
                            <FilterPriceInbox>
                                <InputFilter /> to <InputFilter /> <PriceGoButton> Go </PriceGoButton>
                            </FilterPriceInbox>
                        </FilterPriceCard>
                        <FilterPriceCard>
                            <FilterPriceName>
                                Brand
                            </FilterPriceName>
                            <FilterPriceInbox>
                               <Form>
                                   {
                                       brands ? brands.map((brand) => (
                                            <div key={brand}>
                                                <Form.Check type="checkbox" id={brand} label={`${brand}`} />
                                            </div>
                                       )) : null
                                   }
                               </Form>
                            </FilterPriceInbox>
                        </FilterPriceCard>
                    </FilterCard>
                </Col>
                <Col sm={12} md={9} lg={9} xl={9}>
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
                </Col>
            </Row> 
        </>
    );
}

export default ListScreen;