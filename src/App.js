
//import './App.css';
import SimpleCV from './components/SimpleCV';
import CyberPunkCV from './components/CyberPunkCV';
import { useState } from 'react';


function App() {
  const [connection,setConnection] = useState(false)

  const controlConnection=()=>{
    setConnection(!connection)
  }
  return (
    <div className="App">
      { 
        connection ? 
          <CyberPunkCV /> : 
          <SimpleCV />
      }
      <button onClick={controlConnection}>
        {connection? 'Disconnect' : 'Set connection'}
      </button>
    </div>
  );
}

export default App;
