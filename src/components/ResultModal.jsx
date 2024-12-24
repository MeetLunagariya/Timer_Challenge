import React from "react";
import { createPortal } from "react-dom";

function ResultModal({ ref, targetTime, timeRamainning, onReset }) {
  const userLost = timeRamainning <= 0;
  const formattedTime = (timeRamainning / 1000).toFixed(2);
  const score = Math.round((1 - timeRamainning / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost ? <h2>You lost!</h2> : <h2>Your score : {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped timer with <strong>{formattedTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}

export default ResultModal;
