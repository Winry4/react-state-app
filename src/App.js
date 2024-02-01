import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage, ControlledFormPages, UncontrolledFormPage } from './pages';
import './App.css';
import { CounterButton } from './CounterButton';
import { CongratulationMessage } from './CongratulationMessage';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return(
    <div className="App">
      
      <BrowserRouter>
      <Link to="/counter"> Go to Counter Button Page</Link>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        {/*<Route path="/counter/:name" element={<CounterButtonPage/>}/> */}
          <Route path="/counter" element={<CounterButtonPage/>}/>
          <Route path="/people-list" element={<PeopleListPage/>}/>
          <Route path='*' element={<NotFoundPage/>}></Route>
          <Route path='/protected' element={<ProtectedPage/>}></Route>
          <Route path='/controlled' element={<ControlledFormPages/>}/>
          <Route path='/uncontrolled' element={<UncontrolledFormPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
 
}

export default App;
