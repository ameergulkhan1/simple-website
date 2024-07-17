import React from 'react';

const Home = () => {
  const today = new Date().toLocaleDateString();
  const localtime=new Date().toLocaleTimeString();
  const availableItems = ['T-shirts', 'Shorts'];

  return (
    <div>
      <h2>Home</h2>
      <p>Today's Date: {today}</p>
      <p>todays time:{localtime}</p>
      <p>Available Items: {availableItems.join(', ')}</p>
    </div>
  );
};

export default Home;
