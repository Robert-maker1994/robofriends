import React from 'react'; 


const Card = ({  name, email, id }) => { 
	return ( 
		<div className='bg-light-green dib br3 pa3 ma1 grow bw2 showdow-5'> 
 			<img alt='robots' src={`https://robohash.org/${id}?200x200`} height="200" width='200' />
 		<div> 
 		   <h2>{name}</h2> 
 		   <p>{email}</p> 
 	  </div>
 	  </div> 
	);
}

export default Card;