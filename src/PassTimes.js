import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function PassTimes() {

  // set state
  const [lat, setLat] = useState('40.116421');
  const [long, setLong] = useState('88.243385');

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=40.116421&lon=-88.243385')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      });
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default PassTimes;
