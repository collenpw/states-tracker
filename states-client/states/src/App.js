import './App.css';

import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import AddState from './components/AddState/AddState';
import States from './components/States/States';

import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Route path='/' exact component={Home} />
      <Route path='/add' exact component={AddState} />
      <Route path='/states' exact component={States} />

    </div>
  );
}

export default App;
