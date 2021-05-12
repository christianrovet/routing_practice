import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home'
import Word from './components/Word'
import Combo from './components/Combo'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Word path="/:word"/>
        <Combo path="/:word/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;

