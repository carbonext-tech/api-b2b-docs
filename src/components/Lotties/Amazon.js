// React
import React from "react";

// Lotties animations
import Lottie from "react-lottie";
import amazonAnimation from "/lotties/amazon.json";

export const Amazon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: amazonAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      isClickToPauseDisabled
      style={{
        cursor: "default",
      }}
    />
  );
};
