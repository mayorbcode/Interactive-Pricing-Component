import React from 'react';

const Switch = (props) => {
  const { checked, handleChecked } = props;
  return (
    <label className={`label ${checked && 'green'}`}>
      <span className={`ball ${checked ? 'move-right' : 'move-left'}`}></span>
      <input 
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChecked}
      />
    </label>
  )
}

export default Switch;