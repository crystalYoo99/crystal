import logo from './logo.svg';
import './App.css';
import { Router, browserHistory } from 'react-router';
import Main from './components/Main/Main.js';
import Side from './components/Main/Sections/Side.js';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Main></Main>
      </header>
      <body>
      
      </body>
      
    </div>
  );
}

export default App;
