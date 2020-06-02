import React from 'react' 
import styled from 'styled-components'; 


const Time = styled.div`
  text-align: center; 
`

function Times() {

  return (
    <>
    <Time>
      <p>{this.props.time} | {this.props.duration}</p>
    </Time>
    </>
  );
}

export default Times; 