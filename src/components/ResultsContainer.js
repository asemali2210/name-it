import React from "react";

function ResultsContainer({ namesSearch }) {
  const suggestedNames = namesSearch.map((name) => {
    return (
      <div className="name-card" key={name.toString()}>
        <p>{name}</p>
      </div>
    );
  });
  return <div className="results-container">{suggestedNames}</div>;
}

export default ResultsContainer;
