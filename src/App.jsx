import Player from './components/Player.jsx';
import TimerChanllenge from './components/TimerChanllenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChanllenge title={'Easy'} targetTime={1}/>
        <TimerChanllenge title={'Not Easy'} targetTime={5}/>
        <TimerChanllenge title={'Tough'} targetTime={10}/>
        <TimerChanllenge title={'Pros only'} targetTime={15}/>
      </div>
    </>
  );
}

export default App;
