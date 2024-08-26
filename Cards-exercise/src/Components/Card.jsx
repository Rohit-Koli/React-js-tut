import React from "react";

export const Card = ({ dataFieds }) => {
  return (
    <h1 className="text-2xl font-bold list-none">
      <div className="card">
        {dataFieds.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </div>
    </h1>
  );
};
