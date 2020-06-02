import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
// import Times from './components/Times'; 
import styled from 'styled-components'; 
import moment from 'moment';

const Times = styled.div`
  text-align: center

`

function PassTimes() {

  // set state
  // const [lat, setLat] = useState('40.116421');
  // const [long, setLong] = useState('88.243385');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [gotLocation, setGotLocation] = useState(false);
  const [passTimes, setPassTimes] = useState([]);
  // const [test, setTest] = useState(); 


  // Get current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      setGotLocation(true); 
      
    }); 
  }, []);


  // Use location to get rise times for ISS and setPassTimes to the array
  // Update this when gotLocation has changed
  useEffect(() => {

    console.log(lat); 
    console.log(long); 
    
    // const api = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}&alt=20&n=5&callback=?`
    const api = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`
    // console.log(api);
    
    // Only 
    if(gotLocation === true) {
      axios.get(api)
      .then(response => {
        
        console.log(response.data)
        setPassTimes(response.data.response); 
        
        // console.log(passTimes)
      })
      .catch(error => {
        console.log(error)
      });
    }
      
    console.log(gotLocation)
    console.log(passTimes);
    
  }, [gotLocation]);

 

  return (
    <Times>
      Look up, the International Space Station will be floating by at
      {passTimes.map((data) => (
        <div key={data.risetime}>
          <p>{data.duration}</p>
          <p>{moment(data.risetime).format()}</p> 
        </div>
          
        
      ))}
    </Times>
  );
}

export default PassTimes;
