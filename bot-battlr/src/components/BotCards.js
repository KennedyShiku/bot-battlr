import React, { useState, useEffect} from "react";

const BotCards = () => {
  const [bots, setBots] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/bots")
   .then((response) => response.json())
   .then((data) => setBots(data))
   .catch((error) => console.log("Error fetching data: " + error));
  }, [])


  return ( 
    <div>
      <h1>Bot Card</h1>
      {bots && (
        <div className="bot-cards">
          {bots.map((bot) => (
            <div className="bot-card" key={bot.id}>
              <h2 >Name: {bot.name}</h2>
              <img src={bot.avatar_url} alt={bot.name}/>
              <p style={{fontSize:'8px', fontWeight: 'bold'}}>Catchphrase💬: {bot.catchphrase}</p>
              <p>Health❤️: {bot.health}</p>
              <p>Damage💔: {bot.damage}</p>
              <p>Armor🛡️: {bot.armor}</p>
            </div>
          ))}
        </div>
      )}
    </div>
   );
}
 
export default BotCards;