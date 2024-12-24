import React, { useState } from "react";

function TimerChanllenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)
  function handleStart(){
    setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000);
    setTimerStarted(true);
  }


  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>{timerStarted ? 'Stop' : 'Start'} challenge</button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>Time si running / timer inactive</p>
    </section>
  );
}

export default TimerChanllenge;