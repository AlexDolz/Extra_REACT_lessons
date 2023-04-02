import React from "react";

export const Task = ({ importance, description }) => {
  return (
    <div>
      <p>{importance}</p>
      <p>{description}</p>
    </div>
  );
};
