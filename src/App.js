import logo from './logo.svg';
import './App.css';


const albums = {
  title: 'Only Built 4 Cuban Linx',
  artist: 'Raekwon The Chef',
  released: '1994',
  pic: 'https://upload.wikimedia.org/wikipedia/en/1/17/Raekwon_only.jpg',
  width: '150',
  height: '150'
};

const records = [
  { id: 1, title: 'Houses of The Holy', genre: 'rock', isAvailable: true},
  { id: 2, title: 'Textures', genre: 'jazz/funk', isAvailable: true},
  { id: 2, title: 'Breezin', genre: 'jazz/funk', isAvailable: false},
];

function ReturnofCraet() {
  const listRecs = records.map( rec =>
    <li
    key={rec.id}
    style={{
      color: rec.isAvailable ? 'green' : 'red'
    }}
    >
      {rec.title}
    </li>
  );
  return(
    <ul>{listRecs}</ul>
  )
}

function Shoebox() {
  return(
    <div>
      <h2>{albums.title} {albums.artist}</h2>
      <p>{albums.released}</p>
      {albums.pic &&
      <img 
      className='albumCover'
      src={albums.pic}
      alt={albums.title + 'cover'}
      style={{
        width: albums.width,
        height: albums.height
      }}
      />
      }
    </div>
  );
}

function WowowWutton() {
  return(
    <button>SMASH!</button>
  );
}

function MoopSchnoop() {
  return(
    <><h2>More Deets</h2>
    <p>The fitnessgram pacer test is a multistep aerobic capcity test that progressively
       gets more difficult as it continues...</p></>
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
          Learn React wit ME and MSU boishe is it like thaat???!
        </a>
        <Shoebox />
        <MoopSchnoop />
        <ReturnofCraet />
        <WowowWutton />
      </header>
    </div>
  );
}

export default App;
