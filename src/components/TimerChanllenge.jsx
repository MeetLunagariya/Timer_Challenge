import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChanllenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  const [timeRamainning, setTimeRamainning] = useState(targetTime * 1000);

  const timerIsActive =
    timeRamainning > 0 && timeRamainning < targetTime * 1000;

  if(timeRamainning <= 0 ){
    clearInterval(timer.current)
    // setTimeRamainning(targetTime * 1000)
    dialog.current.showModal()
  }

  function handleReset(){
    setTimeRamainning(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRamainning((preTimeRemainning) => preTimeRemainning - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.showModal()
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime}  timeRamainning={timeRamainning} onReset={handleReset}/>

      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChanllenge;
