import React from "react";

interface ITitle {
  value: string;
  onClick: () => void;
}

export default function Title({ value, onClick }: ITitle) {
  return (
    <h1 data-testid="root" onClick={onClick}>
      {value}
    </h1>
  );
}
