import React, { useState, useEffect } from "react";

const BotCollection = ({selectedBots}) => {

  return ( 
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <ul>
        {selectedBots && selectedBots.map((bot, index) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} className="bot-image"/>
            <h2>{bot.name}</h2>
            <p style={{fontSize:'12px', fontWeight: 'bold'}}>Catchphrase💬: {bot.catchphrase}</p>
            <p>Health❤️: {bot.health}</p>
            <p>Type🤖: {bot.bot_class}</p>
            <p>Damage💔: {bot.damage}</p>
            <p>Armor🛡️: {bot.armor}</p>
          </li>
        ))}
      </ul>
    </div>
   );
}
 
export default BotCollection;