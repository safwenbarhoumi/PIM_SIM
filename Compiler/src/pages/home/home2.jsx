
import React, { useState, useEffect } from "react";

function TimerButton() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
    setTime(10); // Temps en secondes
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    let intervalId = null;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      alert("Le temps est écoulé !");
      handleStop();
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return (
    <div>
      <button onClick={handleStart}>Lancer le chronomètre</button>
      {isRunning && (
        <div>
          Temps restant : {time} s <button onClick={handleStop}>Arrêter</button>
        </div>
      )}
    </div>
  );
}

export default TimerButton; 
