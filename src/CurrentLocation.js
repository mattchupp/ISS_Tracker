import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
// import Times from './components/Times'; 
// import styled from 'styled-components'; 
import moment from 'moment';
import MapContainer from './components/Map'; 

/* Get current location of ISS */

function CurrentLocation() {

  // set state
  const [currentLat, setCurrentLat] = useState(''); 
  const [currentLong, setCurrentLong] = useState(''); 
  const [timestamp, setTimeStamp] = useState(''); 
 
/* runs on interval, commenting out for testing map now
  useEffect(() => { 
    
    const api = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json`
    const getLocation = setInterval(() => {
      axios.get(api)
        .then(response => {
          
          console.log(response.data)
          setCurrentLat(response.data.iss_position.latitude);
          setCurrentLong(response.data.iss_position.longitude);
          setTimeStamp(response.data.timestamp);
          // setCurrentLocation(response.data); 

        })
        .catch(error => {
          console.log(error)
        });
    }, 10000);
    
    return () => clearInterval(getLocation);
    
  }, []);
*/


  useEffect(() => { 
      
    const api = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json`
   
    axios.get(api)
      .then(response => {
        
        console.log(response.data)
        setCurrentLat(response.data.iss_position.latitude);
        setCurrentLong(response.data.iss_position.longitude);
        setTimeStamp(response.data.timestamp);
        // setCurrentLocation(response.data); 

      })
      .catch(error => {
        console.log(error)
      });
    
  }, []);


  return(
    <div>
      <p>{currentLat}</p>
      <p>{currentLong}</p>
      <p>{moment.unix(timestamp).format('MM/DD/YYYY hh:mm:ss')}</p>

      <MapContainer />
    </div>
  )
  
}

export default CurrentLocation;
