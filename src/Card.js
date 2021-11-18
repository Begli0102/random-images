import React from 'react';

const Card = ({images}) => {
  return ( 
  <>
{images.map((img, index)=>(
  <div key={index} className="card"
  style={{background:`url("${img.url}") no-repeat center/cover`}}
  >
  </div>
))}
  </>
   );
}
 
export default Card;