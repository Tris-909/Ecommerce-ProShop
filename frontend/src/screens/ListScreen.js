import React, {useState, useEffect} from 'react'
import { Row, Col, Pagination, Form } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
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

const FilterName = styled.div`
    font-size: 1rem;
    font-weight: 800;
    padding-left: 1rem;
    color: black;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & i {
        cursor: pointer;
    }
`;

const FilterBox = styled.div`
    display: ${props => props.open ? "flex" : "none"};
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
    //TODO: Inner State
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [category, setCategory] = useState(null);
    const [lowPrice, setLowPrice] = useState(0);
    const [highPrice, setHighPrice] = useState(7600);
    const [filteredBrands, setFilteredBrands] = useState([]);
    const [laptopScreenSizes, setLaptopScreenSizes] = useState([]);
    const [laptopRAMs, setLaptopRAMs] = useState([]);

    //TODO: Toggle filters Options
    const [filterPriceOpen, setFilterPriceOpen] = useState(true);
    const [filterBrandsOpen, setFilterBrandsOpen] = useState(true);
    const [filterLaptopScreenSize, setFilterLaptopScreenSize] = useState(true);
    const [filterLaptopRAM, setFilterLaptopRAM] = useState(true);

    //TODO: Data from Redux Store
    const { 
        productsList, 
        brands, 
        screenSizes,
        rams,
        currentPickedBrands,
        currentPickedLaptopScreenSizes, 
        currentPickedRam,
        pages, 
        loading, 
        error 
    } = useSelector(state => state.listProducts);
    
    //TODO: Hide filter options if screenSizeWidth is smaller than 700
    const updateMedia = () => {
        setScreenWidth(window.innerWidth);
      };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    useEffect(() => {
        if (screenWidth < 700) {
            setFilterPriceOpen(false);
            setFilterBrandsOpen(false);
            setFilterLaptopScreenSize(false);
            setFilterLaptopRAM(false);
        } 
    })

    useEffect(() => {
        async function setCat(){
            await setCategory(window.location.pathname.split('/')[1]);
        }

        setCat(); 
    }, [window.location.pathname]);

    useEffect(() => {

        dispatch(getListOfProductsBasedOnCategory(
            category, 
            0, 
            lowPrice, 
            highPrice, 
            filteredBrands, 
            laptopScreenSizes, 
            laptopRAMs));

    }, [dispatch, category, lowPrice, highPrice]);

    useEffect(() => {
        //TODO: Check if server send back any picked brands, if yes, apply these changes to state to provide accurate frontend
        const brandsCheckedArray = [];

        for (let i = 0; i < brands.length; i++) {
            brandsCheckedArray.push({
                id: i,
                value: brands[i],
                isChecked: false
            });
        }

        for ( let i = 0; i < brandsCheckedArray.length; i++) {
            for (let u = 0; u < currentPickedBrands.length; u++) {
                if (brandsCheckedArray[i].value === currentPickedBrands[u]) {
                    brandsCheckedArray[i].isChecked = true;
                }
            }
        }
        setFilteredBrands(brandsCheckedArray);

        //TODO: The same but this time check for laptopScreenSizes
        const laptopScreenSizesCheckedArray = [];
        for (let i = 0; i < screenSizes.length; i++) {
            laptopScreenSizesCheckedArray.push({
                id: i,
                value: screenSizes[i],
                isChecked: false
            });
        }
        for ( let i = 0; i < laptopScreenSizesCheckedArray.length; i++) {
            for (let u = 0; u < currentPickedLaptopScreenSizes.length; u++) {
                if (laptopScreenSizesCheckedArray[i].value === currentPickedLaptopScreenSizes[u]) {
                    laptopScreenSizesCheckedArray[i].isChecked = true;
                }
            }
        }
        setLaptopScreenSizes(laptopScreenSizesCheckedArray);

        //TODO: The same but this time check for laptopRAMSizes
        const laptopRAMsCheckedArray = [];
        for (let i = 0; i < rams.length; i++) {
            laptopRAMsCheckedArray.push({
                id: i,
                value: rams[i],
                isChecked: false
            });
        }

        for ( let i = 0; i < laptopRAMsCheckedArray.length; i++) {
            for (let u = 0; u < currentPickedRam.length; u++) {
                if (laptopRAMsCheckedArray[i].value === currentPickedRam[u]) {
                    console.log('before', laptopRAMsCheckedArray[i].isChecked);
                    laptopRAMsCheckedArray[i].isChecked = true;
                    console.log('after', laptopRAMsCheckedArray[i].isChecked);
                }
            }
        }
        setLaptopRAMs(laptopRAMsCheckedArray);

    }, [brands, currentPickedBrands, screenSizes, currentPickedLaptopScreenSizes, currentPickedRam]);

    const getNextSetOfReviews = (e, nextpage) => {
        e.preventDefault();
        dispatch(getListOfProductsBasedOnCategory(
            category, 
            nextpage-1, 
            lowPrice, 
            highPrice, 
            filteredBrands, 
            laptopScreenSizes,
            laptopRAMs));
    }

    const onFilterPriceHandler = (e) => {
        e.preventDefault();
        dispatch(getListOfProductsBasedOnCategory(
            category, 
            0, 
            lowPrice, 
            highPrice, 
            filteredBrands, 
            laptopScreenSizes,
            laptopRAMs));
    }

    const filterByBrandHandler = (e) => {
        //TODO: to check filter boxes
        let currentBrands = filteredBrands;
        currentBrands.forEach((brand) => {
            if (brand.value === e.target.value) {
                brand.isChecked = e.target.checked;
            }
        });
        setFilteredBrands([...currentBrands]);

        let currentLaptopScreens = laptopScreenSizes;
        currentLaptopScreens.forEach((screen) => {
            if (screen.value === e.target.value) {
                screen.isChecked = e.target.checked;
            }
        });
        setLaptopScreenSizes(currentLaptopScreens);

        let currentRAMSizes = laptopRAMs;
        currentRAMSizes.forEach((ram) => {
            if (ram.value === e.target.value) {
                ram.isChecked = e.target.checked;
            }
        });
        setLaptopRAMs([...currentRAMSizes]);

        dispatch(getListOfProductsBasedOnCategory(
            category, 
            0, 
            lowPrice, 
            highPrice, 
            filteredBrands, 
            laptopScreenSizes,
            laptopRAMs));
    }

    const toggleFilterOptions = (filterName) => {
        if (filterName === 'price') {
            setFilterPriceOpen(!filterPriceOpen);
        } else if (filterName === 'brands') {
            setFilterBrandsOpen(!filterBrandsOpen);
        } else if (filterName === 'screenSizes') {
            setFilterLaptopScreenSize(!filterLaptopScreenSize);
        } else if (filterName === 'ram') {
            setFilterLaptopRAM(!filterLaptopRAM);
        }
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
                            <FilterName>
                                <span>Price</span>
                                <i className="fas fa-angle-down" onClick={(e) => toggleFilterOptions('price')}></i>
                            </FilterName>
                            <FilterBox open={filterPriceOpen}>
                                <InputFilter placeholder="0" value={lowPrice} onChange={(e) => setLowPrice(e.target.value)}/> 
                                to 
                                <InputFilter placeholder="7600" value={highPrice} onChange={(e) => setHighPrice(e.target.value)} /> 
                                <PriceGoButton onClick={(e) => onFilterPriceHandler(e)}> Go </PriceGoButton>
                            </FilterBox>
                        </FilterPriceCard>
                        
                        <FilterPriceCard>
                            <FilterName>
                                <span>Brand</span>
                                
                                <i className="fas fa-angle-down" onClick={(e) => toggleFilterOptions('brands')}></i>
                            </FilterName>
                            <FilterBox open={filterBrandsOpen}>
                               <Form>
                                   {
                                       filteredBrands ? filteredBrands.map((brand) => {
                                            return(
                                            <div key={brand.id}>
                                                <Form.Check 
                                                    type="checkbox" 
                                                    id={brand.id} 
                                                    label={`${brand.value}`}
                                                    checked={brand.isChecked ? "checked" : null}
                                                    value={brand.value}
                                                    onChange={(e) => filterByBrandHandler(e)} 
                                                    />
                                            </div>
                                       )}) : null
                                   }
                               </Form>
                            </FilterBox>
                        </FilterPriceCard>
                        {   
                            category === 'laptops' ? (
                                <>
                                <FilterPriceCard>
                                    <FilterName>
                                            <span> Laptop ScreenSizes </span>

                                            <i className="fas fa-angle-down" onClick={(e) => toggleFilterOptions('screenSizes')}></i>
                                    </FilterName>
                                    <FilterBox open={filterLaptopScreenSize}>
                                       <Form>
                                           {
                                               laptopScreenSizes ? laptopScreenSizes.map((screenSize) => {
                                                    return(
                                                    <div key={screenSize.id}>
                                                        <Form.Check 
                                                            type="checkbox" 
                                                            id={screenSize.id} 
                                                            label={`${screenSize.value}`}
                                                            checked={screenSize.isChecked ? "checked" : null}
                                                            value={screenSize.value}
                                                            onChange={(e) => filterByBrandHandler(e)} 
                                                            />
                                                    </div>
                                               )}) : null
                                           }
                                       </Form>
                                    </FilterBox>
                                </FilterPriceCard>
                                <FilterPriceCard>
                                    <FilterName>
                                            <span> RAM Sizes </span>

                                            <i className="fas fa-angle-down" onClick={(e) => toggleFilterOptions('ram')}></i>
                                    </FilterName>
                                    <FilterBox open={filterLaptopRAM}>
                                       <Form>
                                           {
                                               laptopRAMs ? laptopRAMs.map((ramSize) => {
                                                    return(
                                                    <div key={ramSize.id}>
                                                        <Form.Check 
                                                            type="checkbox" 
                                                            id={ramSize.id} 
                                                            label={`${ramSize.value}`}
                                                            checked={ramSize.isChecked ? "checked" : null}
                                                            value={ramSize.value}
                                                            onChange={(e) => filterByBrandHandler(e)} 
                                                            />
                                                    </div>
                                               )}) : null
                                           }
                                       </Form>
                                    </FilterBox>
                                </FilterPriceCard>
                                </>
                            ) : null
                        }    
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
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center'}}>
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