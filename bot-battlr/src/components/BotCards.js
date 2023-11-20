  import React, { useState, useEffect} from "react";

  const BotCards = ({onBotSelect, onDischargeBot}) => {
    const [bots, setBots] = useState([]);

    useEffect(() => {
      fetch("https://bot-battler-hen2.onrender.com/bots")
    .then((response) => response.json())
    .then((data) => setBots(data))
    .catch((error) => console.log("Error fetching data: " + error));
    }, [])

    const handleBotClick = (selectedBot) => {
      onBotSelect(selectedBot);
    }

    const handleDischargeClick = (botToDischarge) => {
      onDischargeBot(botToDischarge);
    }
    return ( 
      <div>
        <h1>Bot Card</h1>
        {bots && (
          <div className="bot-cards">
            {bots.map((bot) => (
              <div className="bot-card" key={bot.id} onClick={() => handleBotClick(bot)}>
                <h2 >Name: {bot.name}</h2>
                <img src={bot.avatar_url} alt={bot.name} className="bot-image"/>
                <p style={{fontSize:'12px', fontWeight: 'bold'}}>Catchphrase💬: {bot.catchphrase}</p>
                <p>Health❤️: {bot.health}</p>
                <p>Type🤖: {bot.bot_class}</p>
                <p>Damage💔: {bot.damage}</p>
                <p>Armor🛡️: {bot.armor}</p>
                <button style={{color: '#fff', backgroundColor: '#DC143C', fontSize: '20px', border: '1px solid #fff', borderRadius: '10px', cursor: 'pointer'}} onClick={() => handleDischargeClick(bot)}>X</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default BotCards;