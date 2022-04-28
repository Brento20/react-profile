import React from 'react';

import Revamp from "../cards/Revamp";
import Banana from "../cards/Banana";
import Weather from "../cards/Weather";



export default function project() {
  return (
    <div id="container">
      <div id="cardsParent"> 
        <div id="cards">
          <Revamp />
        </div>

        <div id="cards">
        <Banana />
        </div>

        <div id="cards">
        <Weather />
        </div>
      </div>
    </div>
  );
}
