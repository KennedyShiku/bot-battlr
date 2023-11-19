import './App.css';
import React, {useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import BotCards from './components/BotCards';

function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  const handleBotSelect = (selectedBot) => {
    setSelectedBots(prevBots => {
      if (!prevBots.find(bot => bot.id === selectedBot.id)) {
        return [...prevBots, selectedBot]
      }
      return prevBots;
    })
  };

  const handleRemoveBot = (bot) => {
    setSelectedBots(selectedBots.filter((selectedBot) => selectedBot.id!== bot.id));
  };

  const handleDischargeClick = (botToDischarge) => {
    fetch(`http://localhost:3000/bots/${botToDischarge.id}`,{
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        handleRemoveBot(botToDischarge);
      } else {
        console.error('Failed to discharge bot');
      }
    })
    .catch(error => console.error('Error: ', error));
  };

  return (
    <div className='content-container'>
      <BotCollection selectedBots={selectedBots} onRemoveBot={handleRemoveBot}/>
      <BotCards onBotSelect={handleBotSelect} onDischargeBot={handleDischargeClick}/>
    </div>
  );
}

export default App;
