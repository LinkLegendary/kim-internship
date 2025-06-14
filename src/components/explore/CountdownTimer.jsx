import React, { useState, useEffect } from "react";

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = endTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null; // expired
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  if (!timeLeft) {
    return <div className="de_countdown">Expired</div>;
  }

  const { hours, minutes, seconds } = timeLeft;

  const formatNumber = (n) => n.toString().padStart(2, "0");

  return (
    <div className="de_countdown">
      {`${formatNumber(hours)}h ${formatNumber(minutes)}m ${formatNumber(seconds)}s`}
    </div>
  );
};

export default CountdownTimer;
