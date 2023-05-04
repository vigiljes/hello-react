import {useState} from 'react';
import {supabase} from './supabaseClient';
import logo from './logo.svg';
import './App.css';


function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: books } = await supabase
      .from('books')
      .select('*')
    // Update the state
    setMyBooks(books);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <>
    <table style={{color: 'green', fontFamily: 'monospace', width: '8px', fontWeight: '100'}}>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
    </>
  )
}


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

  const[count, setCount] = useState(0);

  function smeesh (){
    setCount(count + 1);
  }

  return(
    <>
    <h3>Test your Might!</h3>
    <button onClick={smeesh}>SMASHED {count} Times!</button>
    </>
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
        <Library />
        <Shoebox />
        <MoopSchnoop />
        <ReturnofCraet />
        <WowowWutton />
      </header>
    </div>
  );
}

export default App;
