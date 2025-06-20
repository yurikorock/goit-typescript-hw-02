import React from "react";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
