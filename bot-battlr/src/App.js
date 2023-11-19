import './App.css';
import React, {useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import BotCards from './components/BotCards';

function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  const handleBotSelect = (selectedBot) => {
    setSelectedBots([...selectedBots, selectedBot]);
  };

  return (
    <div className='content-container'>
      <BotCollection selectedBots={selectedBots}/>
      <BotCards onBotSelect={handleBotSelect}/>
    </div>
  );
}

export default App;
