import React from 'react';
import Promotions from '../components/Promotions';

const PromotionsContainer = () => {
  const promotions = [
    { title: 'Spring Special', description: 'Double points on all purchases in April!' },
    { title: 'Dental Week Bonus', description: 'Extra 300 points for dental products' },
  ];

  return <Promotions promotions={promotions} />;
};

export default PromotionsContainer;

