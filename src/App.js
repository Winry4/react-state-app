import React, {useState} from 'react';
import './App.css';
import { CounterButton } from './CounterButton';
import { CongratulationMessage } from './CongratulationMessage';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
          ? null
          : <CongratulationMessage 
            numberOfClicks={numberOfClicks} 
            threshold={10} 
            onHide={() => setHideMessage(true)}/>}
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}></CounterButton>
      </header>
    </div>
  );
}

export default App;
