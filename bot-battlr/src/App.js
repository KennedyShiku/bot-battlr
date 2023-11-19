import './App.css';
import BotCollection from './components/BotCollection';
import BotCards from './components/BotCards';

function App() {
  return (
    <div className='content-container'>
      <BotCollection />
      <BotCards />
    </div>
  );
}

export default App;
