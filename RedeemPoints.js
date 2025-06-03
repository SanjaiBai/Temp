import React, { useState } from 'react';

const RedeemPoints = ({ pointBalance }) => {
  const [pointsToRedeem, setPointsToRedeem] = useState('');
  const dollarValue = pointsToRedeem * 0.01;

  const handleRedeem = () => {
    alert(`You redeemed ${pointsToRedeem} points = $${dollarValue.toFixed(2)}`);
  };

  return (
    <div>
      <h2>Redeem My Points</h2>
      <p>Available Points: {pointBalance}</p>
      <input
        type="number"
        placeholder="Enter points"
        value={pointsToRedeem}
        onChange={(e) => setPointsToRedeem(e.target.value)}
      />
      <p>Dollar Value: ${dollarValue.toFixed(2)}</p>
      <button onClick={handleRedeem}>Redeem</button>
    </div>
  );
};

export default RedeemPoints;
