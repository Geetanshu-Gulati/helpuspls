// Import necessary dependencies
import React, { useRef, useLayoutEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useWindowSize from './useWindowSize'; // Make sure to have this hook file in your project
import TinderCard from './TinderCard'; // Path to your TinderCard component

const YourComponent = () => {
  const { width, height } = useWindowSize();
  const [{ xyrot }, setSpringTarget] = useSpring(() => ({
    xyrot: [0, 0, 0],
    config: {
      friction: 50,
      tension: 2000
    }
  }));

  const cardRef = useRef(null);

  const handleSwipe = async (dir) => {
    console.log("Swiped:", dir);
  };

  const handleCardLeftScreen = (dir) => {
    console.log("Card left screen:", dir);
  };

  return (
    <TinderCard
      flickOnSwipe={true}
      onSwipe={handleSwipe}
      onCardLeftScreen={handleCardLeftScreen}
      ref={cardRef}
    >
      {/* Your card content goes here */}
      <div className="card">
        <h2>Entrepreneur Name</h2>
        <p>Company: XYZ</p>
        <p>Location: City, Country</p>
      </div>
    </TinderCard>
  );
};

export default YourComponent;
