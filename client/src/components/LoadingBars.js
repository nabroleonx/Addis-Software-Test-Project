import React, { useEffect, useState } from "react";
import styled from "styled-components";

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const LoadingBarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 4rem;
  margin-top: 10rem;
`;

const LoadingBar = styled.div`
  background-color: #024173;
  border-radius: 0.25rem;
  margin: 0 0.25rem;
  width: 10px;
  transition: height 0.7s ease;
`;

const LoadingBars = ({ stopScan }) => {
  const [, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 750);

    if (stopScan) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [stopScan]);

  const renderLoadingBars = () => {
    let bars = [];
    for (let i = 0; i < 10; i++) {
      bars.push(
        <LoadingBar
          key={i}
          style={{
            height: randomIntFromInterval(1, 60),
          }}
        />
      );
    }
    return bars;
  };

  return <LoadingBarContainer>{renderLoadingBars()}</LoadingBarContainer>;
};

export default LoadingBars;
