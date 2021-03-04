import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';
import {getStoreInfo} from '../redux/actions/storeFinder';
import Helmet from '../components/Helmet';

const ButtonMoreInfo = styled.button`
    padding: 1rem;
    width: 100%;
    border: 1px solid black;
    text-align: center;
    background-color: white;
`;

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
    const dispatch = useDispatch();
    const [showingInfoWindow, setShowInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});

    const {
        storeInfo,
        loading,
        error
    } = useSelector(state => state.storeInfo)

    useEffect(() => {
        dispatch(getStoreInfo());
    }, []);

    const onMarkerClick = (props, marker, e, singleStoreInfo) => {
        let newProps = {...singleStoreInfo, ...props};
        setSelectedPlace(newProps);
        setActiveMarker(marker);
        setShowInfoWindow(true);
    }

    const onClose = () => {
      if (showingInfoWindow) {
        setShowInfoWindow(false);
        setActiveMarker(null);
      }
    };

    return(
        <div style={divStyle}>
            <Helmet title={`Our Store Locations`} />
            <StoreFinderTitle> Our Store Locations : </StoreFinderTitle>
            <Map
                google={props.google}
                zoom={4}
                style={mapStyles}
                initialCenter={
                  {
                    lat: -19.275780,
                    lng: 146.757670
                  }
                }
            >
                {
                    loading ? null : storeInfo ? storeInfo.map((singleStoreInfo) => {
                        return(
                                <Marker
                                  key={singleStoreInfo._id}
                                  id={singleStoreInfo._id}
                                  onClick={(props, marker, e) => onMarkerClick(props, marker, e, singleStoreInfo)}
                                  name={singleStoreInfo.name}
                                  position={singleStoreInfo.position} 
                                />
                        )
                    }) : null
                }
                <InfoWindow
                 marker={activeMarker}
                 visible={showingInfoWindow}
                 onClose={() => onClose()}
                    >
                   <h3>{selectedPlace.name}</h3>
                   <p>Address: {selectedPlace.address}</p>
                   <p>Phone: {selectedPlace.phone}</p>
                   <ButtonMoreInfo><a href={selectedPlace.link} target="_blank">More Info</a></ButtonMoreInfo>
                </InfoWindow>
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCpvB_8xGXFneV-NrpYT9EDOQJfx1tdjAo "
})(StoreFinder);