import React from 'react'; 
import { Link } from 'react-router-dom'; 

function Home() {
 
  return (
    <div>
      <Link to="/times">See passover times</Link>
    </div>
  )
}

export default Home