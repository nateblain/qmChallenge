import React from 'react';

const Result = (props: { generatedQuery: string }) => (
  <div className="resultsContainer">
    <div className="resultInfo">
      Your Generated SQL Statement goes here:
    </div>
    <div>
      {props.generatedQuery}
    </div>
  </div>
);

export default Result;
