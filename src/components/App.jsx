import React from "react";
import Card from "./Card";
import emojipedia from "/src/emojipedia";

function createCard(e) {
  return <Card key={e.id} emoji={e.emoji} name={e.name} meaning={e.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}
export default App;
