import React, { useState } from 'react';
// import { Apple } from '../assets/svg';
export default function ImageSelect({ options, onChange, value }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState('--Please choose your bank--');
  return (
    <div className="select">
      <div className="initio-option">
        <p>--Please choose your bank--</p>
      </div>
      <div>{/* <Apple /> */}</div>
    </div>
  );
}

// export default ImageSelect;
