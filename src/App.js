import React, { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ResultsContainer from "./components/ResultsContainer";
const name = require("@rstacruz/startup-name-generator");
function App() {
  const [names, setNames] = useState([]);
  const [expand, setExpand] = useState(false);
  const handleChange = (inputText) => {
    if (inputText.length === 0) {
      setNames([]);
      setExpand(false);
    } else {
      setNames(name(`${inputText}`));
      setExpand(true);
    }
  };
  return (
    <div className="App">
      <Header imgExpand={expand} />
      <SearchBox onInputChange={handleChange} />
      <ResultsContainer namesSearch={names} />
    </div>
  );
}

export default App;
