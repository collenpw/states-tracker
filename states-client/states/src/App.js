import './App.css';

import Navbar from './components/Nav/Navbar';
import AddState from './components/AddState/AddState';
import States from './components/States/States';

import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to your state tracker!</h1>
      <AddState />
      <Route path='/add' exact component={AddState} />
      <Route path='/states' exact component={States} />

    </div>
  );
}

export default App;
