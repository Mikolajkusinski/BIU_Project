import {useLoadScript, GoogleMap} from '@react-google-maps/api';
import React, { useState,useEffect } from 'react';


import styles from "./googleMap.module.css";

function Map(){
    const [location, setLocation] = useState({});
    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,});

    function getLocation(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            setLocation(latitude, longitude);
          }, (error) => {
            console.log(error);
          });
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
    }
    
    useEffect(() => {
        getLocation();
      }, []
    );

    

    if(!isLoaded){
        return (<div>Loading...</div>);
    }
    console.log(location.latitude);
    return(
        <GoogleMap zoom={10} center={{lat: location.latitude, lng: location.longitude}} mapContainerClassName={styles.map}></GoogleMap>

    );
}

export default Map;