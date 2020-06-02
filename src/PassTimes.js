import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios'; 

function PassTimes() {

  // set state
  // const [lat, setLat] = useState('40.116421');
  // const [long, setLong] = useState('88.243385');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [gotLocation, setGotLocation] = useState(false);
  // const [passTimes, setPassTimes] = useState([]);
  // const [test, setTest] = useState(); 


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      setGotLocation(true); 
      
    }); 
  }, []);

  useEffect(() => {
    

    console.log(lat); 
      console.log(long); 
    // console.long(gotLocation)
    const api = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`
    console.log(api);
    /*
    // if(gotLocation === true) {
      axios.get(`https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`)
      .then(response => {
        
        console.log(response.data)
        // setPassTimes(response.data); 
        
        // console.log(passTimes)
      })
      .catch(error => {
        console.log(error)
      });
    // }
      */
    // console.log(gotLocation)
    
  }, [lat,long]);

  // // console.log(test)
  // setTest('Hello')
  // console.log(test)

  return (
    <div>
      
    </div>
  );
}

export default PassTimes;
