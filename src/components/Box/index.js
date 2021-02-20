import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Switch from './Switch';
import { prices, pageViews } from '../../SubscriptionInfo';

const Box = () => {
  const [ slider, setSlider ] = useState('2');
  const [ checked, setChecked ] = useState(false);
  const [ covered, setCovered ] = useState(50);
  
  // Usecallback implementation as advised by Keanu
  const handleSlider = useCallback((e) => {
    // console.log(e.target.value);
    setSlider(e.target.value);
  }, []);

  const handleChecked = (e) => {
    // console.log(e.target.checked);
    setChecked(e.target.checked);
  };

  // Usememo implementation as advised by Keanu
  const checkPrice = useMemo(() => {
    console.log('i ran')
    return !checked ? prices[slider].toFixed(2) : (prices[slider] * 0.75).toFixed(2)
  }, [slider, checked]);


  useEffect(() => {
    setCovered((slider/4) * 100)
  }, [slider]);

  console.log(covered);
  
  return (
    <div className="box">
      <div className="top">
        <div className="heading">
          <p className="page-views">${pageViews[slider]} PAGEVIEWS</p>
          <p><span>${checkPrice}</span> / month</p>
        </div>
        <input 
          style={{ background: `linear-gradient(to right, hsl(174, 77%, 80%) ${covered}%, hsl(224, 65%, 95%) 0%)` }}
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