import React from 'react'

// props
// State 
// children

const scroll = (props)=> {
  return (
  <div style={{ overflowY: 'scroll', border:' 5px solid black', height: '800px' }}>
  {props.children}
  </div>
 );
};
export default scroll;