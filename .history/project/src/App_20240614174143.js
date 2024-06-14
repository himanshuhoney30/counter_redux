import logo from './logo.svg';
import logo1 from './logo1.png'
import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex'>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo1} className="App-logo" alt="logo" />
        </div>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
