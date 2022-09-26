import logo from './logo.svg';
import './App.css';
import ClassComp from './components/classcomp';
import FunctionalComp from './components/functionalcomp';

function App() {
  return (
    <div className="App">
      <h1 id='title'>Styling using Functional and Class Components</h1>
      <div id='d1'>
      <FunctionalComp id='fc'/>
      <ClassComp id='cc'/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
