import React from "react";

type Props = { results: { original_title: string; id: string }[] };

const Results = ({ results }: Props) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
