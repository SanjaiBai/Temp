import React from 'react';

const Promotions = ({ promotions }) => {
  return (
    <div>
      <h2>Active Promotions</h2>
      {promotions.map((promo, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
          <h4>{promo.title}</h4>
          <p>{promo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Promotions;
