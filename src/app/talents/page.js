'use client';

import React, { useState } from 'react';
import CardTalent from './CardTalent';
import CardTalentList from './CardTalentList';

const page = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <CardTalentList/>
    </div>
  );
};

export default page;