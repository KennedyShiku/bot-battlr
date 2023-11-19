import React, { useState, useEffect } from "react";

const BotCollection = ({selectedBots}) => {

  return ( 
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-cards">
        {selectedBots && selectedBots.map((bot, index) => (
          <div className="bot-card" key={bot.id}>
            <h2>Name: {bot.name}</h2>
            <img src={bot.avatar_url} alt={bot.name} className="bot-image"/>
            <p style={{fontSize:'12px', fontWeight: 'bold'}}>Catchphrase💬: {bot.catchphrase}</p>
            <p>Health❤️: {bot.health}</p>
            <p>Type🤖: {bot.bot_class}</p>
            <p>Damage💔: {bot.damage}</p>
            <p>Armor🛡️: {bot.armor}</p>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default BotCollection;