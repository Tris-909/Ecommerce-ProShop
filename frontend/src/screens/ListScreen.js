import React, {useState, useEffect} from 'react'
import { Row, Col, Pagination } from 'react-bootstrap';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import {getListOfProductsBasedOnCategory} from '../redux/actions/productActions';

import FilterComponent from '../components/Filters/Laptops/LaptopFiltersComponent';
import Product from '../components/Product';
import Message from '../components/Message';
import LoadingScreen from '../components/LoadingScreen';
import Helmet from '../components/Helmet';

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
    const [laptopProcessorTypes, setLaptopProcessorTypes] = useState([]);
    const [tvScreenSizes, setTVScreenSizes] = useState([]);
    const [tvScreenSolution, setTVScreenSolution] = useState([]);

    //TODO: Toggle filters Options
    const [filterPriceOpen, setFilterPriceOpen] = useState(true);
    const [filterBrandsOpen, setFilterBrandsOpen] = useState(true);
    const [filterLaptopScreenSize, setFilterLaptopScreenSize] = useState(true);
    const [filterLaptopRAM, setFilterLaptopRAM] = useState(true);
    const [filterLaptopProcessorType, setFilterLaptopProcessorTypes] = useState(true);
    const [filterTVScreenSize, setFilterTVScreenSize] = useState(true);
    const [filterTVScreenSolution, setFilterTVScreenSolution] = useState(true);

    //TODO: Data from Redux Store
    const { 
        productsList, 
        brands, 
        screenSizes,
        rams,
        processorTypes,
        tvScreenSize,
        tvScreenSolutions,
        currentPickedBrands,
        currentPickedLaptopScreenSizes, 
        currentPickedRam,
        currentPickedProcessorType,
        currentPickedTVScreenSize,
        currentPickedTVScreenSolution,
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
            setFilterLaptopProcessorTypes(false);
            setFilterTVScreenSize(false);
            setFilterTVScreenSolution(false);
        } 
    }, [])

    useEffect(() => {
        async function setCat(){
            await setCategory(window.location.pathname.split('/')[1]);
        }

        setCat(); 
    }, [window.location.pathname]);

    useEffect(() => {
        //TODO: Fetch new products based on every change in price list box and price list box only
        dispatch(getListOfProductsBasedOnCategory(
            category, 
            0, 
            lowPrice, 
            highPrice, 
            filteredBrands, 
            laptopScreenSizes, 
            laptopRAMs,
            laptopProcessorTypes,
            tvScreenSizes,
            tvScreenSolution
        ));

    }, [dispatch, category, lowPrice, highPrice]);

    useEffect(() => {
        //TODO: Unchecking all filter when switch category
        setLowPrice(0);
        setHighPrice(7600);
        unCheckAllFilter(filteredBrands);
        unCheckAllFilter(laptopScreenSizes);
        unCheckAllFilter(laptopRAMs);
        unCheckAllFilter(laptopProcessorTypes);
        unCheckAllFilter(tvScreenSizes);
        unCheckAllFilter(tvScreenSolution);

        dispatch(getListOfProductsBasedOnCategory(
            category, 
            0, 
            lowPrice, 
            highPrice, 
            filteredBrands, 
            laptopScreenSizes,
            laptopRAMs,
            laptopProcessorTypes,
            tvScreenSizes,
            tvScreenSolution));
    }, [dispatch, category]);

    useEffect(() => {
        //TODO: Check if server send back any picked brands, if yes, apply these changes to state to provide accurate frontend
        const brandsCheckedArray = checkIfFilterIsCheckedOrNot(brands, currentPickedBrands);
        setFilteredBrands(brandsCheckedArray);

        //TODO: The same but this time check for laptopScreenSizes
        const laptopScreenSizesCheckedArray = checkIfFilterIsCheckedOrNot(screenSizes, currentPickedLaptopScreenSizes);
        setLaptopScreenSizes(laptopScreenSizesCheckedArray);

        //TODO: The same but this time check for laptopRAMSizes
        const laptopRAMsCheckedArray = checkIfFilterIsCheckedOrNot(rams, currentPickedRam);
        setLaptopRAMs(laptopRAMsCheckedArray);

        //TODO: The same but this time check for laptopRAMSizes
        const laptopProcessorTypesCheckedArray = checkIfFilterIsCheckedOrNot(processorTypes, currentPickedProcessorType);
        setLaptopProcessorTypes(laptopProcessorTypesCheckedArray);

        const tvScreenSizeCheckedArray = checkIfFilterIsCheckedOrNot(tvScreenSize, currentPickedTVScreenSize);
        setTVScreenSizes(tvScreenSizeCheckedArray);

        const tvScreenSolutionCheckedArray = checkIfFilterIsCheckedOrNot(tvScreenSolutions, currentPickedTVScreenSolution);
        setTVScreenSolution(tvScreenSolutionCheckedArray);
    }, [
        brands, 
        currentPickedBrands, 
        screenSizes, 
        processorTypes,
        rams,
        tvScreenSize,
        tvScreenSolutions,
        currentPickedLaptopScreenSizes, 
        currentPickedRam,
        currentPickedProcessorType,
        currentPickedTVScreenSize,
        currentPickedTVScreenSolution
    ]);

    const unCheckAllFilter = (filterList) => {
        for (let i = 0; i < filterList.length; i++) {
            if (filterList[i].isChecked === true) {
                filterList[i].isChecked = false;
            }
        }
    }

    const checkIfFilterIsCheckedOrNot = (listOfFilters, currentPickedFilterOfThisTypeOfFilter) => {
        const filterCheckedArray = [];
        for (let i = 0; i < listOfFilters.length; i++) {
            filterCheckedArray.push({
                id: i,
                value: listOfFilters[i],
                isChecked: false
            });
        }
        for ( let i = 0; i < filterCheckedArray.length; i++) {
            for (let u = 0; u < currentPickedFilterOfThisTypeOfFilter.length; u++) {
                if (filterCheckedArray[i].value === currentPickedFilterOfThisTypeOfFilter[u]) {
                    filterCheckedArray[i].isChecked = true;
                }
            }
        }
        return filterCheckedArray;
    }

    const getNextSetOfReviews = (e, nextpage) => {
        e.preventDefault();
        dispatch(getListOfProductsBasedOnCategory(
            category, 
            nextpage-1, 
            lowPrice, 
            highPrice, 
            filteredBrands, 
            laptopScreenSizes,
            laptopRAMs,
            laptopProcessorTypes,
            tvScreenSizes,
            tvScreenSolution));
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
            laptopRAMs,
            laptopProcessorTypes,
            tvScreenSizes,
            tvScreenSolution));
    }

    const filterByBrandHelperFunction = (e, listOfCurrentFilters) => {
        let currentFilters = listOfCurrentFilters;
        currentFilters.forEach((filter) => {
            if (filter.value === e.target.value) {
                filter.isChecked = e.target.checked;
            }
        });
        return currentFilters;
    }
    const filterByBrandHandler = (e) => {
        //TODO: to check filter boxes
        let currentBrands = filterByBrandHelperFunction(e, filteredBrands);
        setFilteredBrands([...currentBrands]);

        let currentLaptopScreens = filterByBrandHelperFunction(e, laptopScreenSizes);
        setLaptopScreenSizes(currentLaptopScreens);

        let currentRAMSizes = filterByBrandHelperFunction(e, laptopRAMs);
        setLaptopRAMs([...currentRAMSizes]);

        let currentProcessorTypes = filterByBrandHelperFunction(e, laptopProcessorTypes);
        setLaptopProcessorTypes([...currentProcessorTypes]);

        let currentTVScreenSize = filterByBrandHelperFunction(e, tvScreenSizes);
        setTVScreenSizes([...currentTVScreenSize]);

        let currentTVScreenSolution = filterByBrandHelperFunction(e, tvScreenSolution);
        setTVScreenSolution([...currentTVScreenSolution]);

        dispatch(getListOfProductsBasedOnCategory(
            category, 
            0, 
            lowPrice, 
            highPrice, 
            filteredBrands, 
            laptopScreenSizes,
            laptopRAMs,
            laptopProcessorTypes,
            tvScreenSizes,
            tvScreenSolution));
    }

    const toggleFilterOptions = (filterName) => {
        switch(filterName) {
            case 'price': 
                setFilterPriceOpen(!filterPriceOpen);
                break;
            case 'brands':
                setFilterBrandsOpen(!filterBrandsOpen);
                break;
            case 'screenSizes':
                setFilterLaptopScreenSize(!filterLaptopScreenSize);
                break;
            case 'ram':
                setFilterLaptopRAM(!filterLaptopRAM);
                break;
            case 'processorType':
                setFilterLaptopProcessorTypes(!filterLaptopProcessorType);
                break;
            case 'tvScreenSize':
                setFilterTVScreenSize(!filterTVScreenSize);
                break;
            case 'tvScreenSolution':
                setFilterTVScreenSolution(!filterTVScreenSolution);
                break;
            default: 
                break;
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
                        
                        <FilterComponent 
                            filterName="Brands"
                            toggleFilterOptions={toggleFilterOptions}
                            toggleFilterOptionsArgument="brands"
                            filterIsActive={filterBrandsOpen}
                            listOfFilters={filteredBrands}
                            filterProduct={filterByBrandHandler}
                        />

                        {   
                            category === 'laptops' ? (
                                <>
                                    <FilterComponent 
                                        filterName="Laptop ScreenSizes"
                                        toggleFilterOptions={toggleFilterOptions}
                                        toggleFilterOptionsArgument="screenSizes"
                                        filterIsActive={filterLaptopScreenSize}
                                        listOfFilters={laptopScreenSizes}
                                        filterProduct={filterByBrandHandler}
                                    />
                                    <FilterComponent 
                                        filterName="RAM Sizes"
                                        toggleFilterOptions={toggleFilterOptions}
                                        toggleFilterOptionsArgument="ram"
                                        filterIsActive={filterLaptopRAM}
                                        listOfFilters={laptopRAMs}
                                        filterProduct={filterByBrandHandler}
                                    />
                                    <FilterComponent 
                                        filterName="Processor Types"
                                        toggleFilterOptions={toggleFilterOptions}
                                        toggleFilterOptionsArgument="processorType"
                                        filterIsActive={filterLaptopProcessorType}
                                        listOfFilters={laptopProcessorTypes}
                                        filterProduct={filterByBrandHandler}
                                    />
                                </>
                            ) : null
                        }    
                        {
                            category === 'tvs' ? (
                                <>
                                    <FilterComponent 
                                        filterName="Screen Sizes"
                                        toggleFilterOptions={toggleFilterOptions}
                                        toggleFilterOptionsArgument="tvScreenSize"
                                        filterIsActive={filterTVScreenSize}
                                        listOfFilters={tvScreenSizes}
                                        filterProduct={filterByBrandHandler}
                                    />
                                    <FilterComponent 
                                        filterName="Screen Solutions"
                                        toggleFilterOptions={toggleFilterOptions}
                                        toggleFilterOptionsArgument="tvScreenSolution"
                                        filterIsActive={filterTVScreenSolution}
                                        listOfFilters={tvScreenSolution}
                                        filterProduct={filterByBrandHandler}
                                    />
                                </>
                            ) : null
                        }
                    </FilterCard>
                </Col>
                <Col sm={12} md={9} lg={9} xl={9}>
                <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                    {loading ? 
                        <LoadingScreen /> : error ?
                             <Message variant="danger" content="Something is wrong, please reload the webpage" /> : 
                             productsList.length === 0 ? (
                                <h1>Can't find the product you are looking for</h1>
                             ) : (
                                productsList.map((item) => {
                                    return(
                                        <Col sm={12} md={6} lg={6} xl={4} key={item._id}>
                                            <Product product={item} link={`/product`}/>
                                        </Col>
                                    );
                                })
                             )
                    }
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