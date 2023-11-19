import { useState, useEffect } from "react";

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((res) => res.json())
    .then((data) => setBots(data));
  }, [])

  return ( 
    <div className="bot-collection">
      <h1>Bot Collection</h1>
      <img></img>
    </div>
   );
}
 
export default BotCollection;