import React, { useState } from 'react'

const NumberPlusMinus = (props) => {

  const [number, setNumber] = useState(Number(props.init));

  return(
    <div className='count-container'>
      <button className='minus' onClick={() => {setNumber(number - Number(props.step)) }}>-</button>

      <span>{number}</span>

      <button className='plus' onClick={() => {setNumber(number + Number(props.step) )}}>+</button>
    </div>

  );
}

export default NumberPlusMinus;