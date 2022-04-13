import React from "react";

interface ITitle {
  title: string;
}

export default function Title({ title }: ITitle) {
  return <h1>{title}</h1>;
}
