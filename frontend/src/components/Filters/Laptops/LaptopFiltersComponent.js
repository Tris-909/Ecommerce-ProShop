import React from 'react';
import {Form} from 'react-bootstrap';
import styled from 'styled-components';

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

const LaptopFilterComponent = (props) => {
    const {
        filterName,
        toggleFilterOptions,
        toggleFilterOptionsArgument,
        filterIsActive,
        listOfFilters,
        filterProduct
    } = props;
    
    return(
    <FilterPriceCard>
        <FilterName>
                <span> {filterName} </span>

                <i className="fas fa-angle-down" onClick={(e) => toggleFilterOptions(toggleFilterOptionsArgument)}></i>
        </FilterName>
        <FilterBox open={filterIsActive}>
           <Form>
               {
                   listOfFilters ? listOfFilters.map((filter) => {
                        return(
                        <div key={filter.id}>
                            <Form.Check 
                                type="checkbox" 
                                id={filter.id} 
                                label={`${filter.value}`}
                                checked={filter.isChecked ? "checked" : null}
                                value={filter.value}
                                onChange={(e) => filterProduct(e)} 
                                />
                        </div>
                   )}) : null
               }
           </Form>
        </FilterBox>
    </FilterPriceCard>
    );
}

export default LaptopFilterComponent;