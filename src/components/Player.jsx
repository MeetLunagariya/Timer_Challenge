import { useState } from "react";

export default function Player() {

  const [name,setName] = useState('');
  // const [name1,setName1] = useState('unknown')

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" value={name} onChange={(e)=>(setName(e.target.value))}/>
        <button onClick={()=>{
          setName1(name)
        }}>Set Name</button>
      </p>
    </section>
  );
}
