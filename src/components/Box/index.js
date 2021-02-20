import React, { useState } from 'react';
import Switch from './Switch';
import { prices, pageViews } from '../../SubscriptionInfo';

const Box = () => {
  const [ slider, setSlider ] = useState('2');
  const [ checked, setChecked ] = useState(false)

  const handleSlider = (e) => {
    console.log(e.target.value);
    setSlider(e.target.value);
  }

  const handleChecked = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  }

  let covered;
  let notCovered;
  const testColor = (x) => {
    covered = (x/4) * 100;
    notCovered = 100 - covered;
  }

  return (
    <div className="box">
      <div className="top">
        <div className="heading">
          <p className="page-views">${pageViews[slider]} PAGEVIEWS</p>
          <p><span>${!checked ? prices[slider].toFixed(2) : (prices[slider] * 0.75).toFixed(2)}</span> / month</p>
        </div>
        <input 
          className="slider" 
          type="range"
          min="0"
          max="4"
          step="1"
          value={slider}
          onChange={handleSlider}
        />
        <div className="billing">
          <p>Monthly Billing</p>
          <Switch 
            checked={checked}
            handleChecked={handleChecked}
          />
          <div className="yearly">
            <p>Yearly Billing</p>
            <p className="discount">25% discount</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="features">
          <p>Unlimited Websites</p>
          <p>100% data ownership</p>
          <p>Email reports</p>
        </div>
        <button>
          Start my trial
        </button>
    </div>
    </div>
  );
}

export default Box;