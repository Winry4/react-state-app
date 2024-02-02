import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage, ControlledFormPages, UncontrolledFormPage, UserProfilePage } from './pages';
import './App.css';
import { NavBar } from './NavBar';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return(
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <div className='App-Header'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/*<Route path="/counter/:name" element={<CounterButtonPage/>}/> */}
          <Route path="/counter" element={<CounterButtonPage/>}/>
          <Route path="/people-list" element={<PeopleListPage/>}/>
          <Route path='*' element={<NotFoundPage/>}></Route>
          <Route path='/protected' element={<ProtectedPage/>}></Route>
          <Route path='/user' element={<UserProfilePage/>}></Route>
          <Route path='/controlled' element={<ControlledFormPages/>}/>
          <Route path='/uncontrolled' element={<UncontrolledFormPage/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
 
}

export default App;
