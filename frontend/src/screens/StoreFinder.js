import React, {useState} from 'react';
import styled from 'styled-components';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    position: 'relative !important',
    width: '100%',
    height: '100%'
};

const divStyle = {
    width: "100%", 
    height: "500px",
    position: 'relative'
}

const StoreFinderTitle = styled.div`
    color: black;
    font-size: 2.5rem;
    font-weight: 800;
    font-family: Rokkitt;
`;

const StoreFinder = (props) => {
    return(
        <div style={divStyle}>
            <StoreFinderTitle> Our Store Locations : </StoreFinderTitle>
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                  {
                    lat: -1.2884,
                    lng: 36.8233
                  }
                }
            />
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAP_API_KEY
})(StoreFinder);