import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState();

  return (
    <section id="player">
      <h2>Welcome {name ?? "Unique Person"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button
          onClick={() => {
            setName(playerName.current.value);
            playerName.current.value = ""; // Clear input field after setting name
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
