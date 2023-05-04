import logo from './logo.svg';
import './App.css';

function TestyourMight(){
  return(
    <>
    <h3>Test your might!!</h3>
    <button>SMASH!</button>
    </>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React wit ME and MSU boishe is it like thaaaaaaat???!
        </a>
      </header>
      <TestyourMight/>
    </div>
  );
}

export default App;
