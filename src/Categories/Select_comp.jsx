import React from 'react';

const Select = ({name, values, handler}) => {
  //to include word Select on select drop down
  const newValues = ['Select'].concat(values)
  return (
    <select className='ui fluid dropdown'name={name} onChange={handler}>{
      newValues.map((val, index) => {
        return (
          <option key={index} value={val}>
            {val}
          </option>
        )
      })
    }</select>
  )
}

export default Select