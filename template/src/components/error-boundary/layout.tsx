import React from "react";

export function ErrorLayout() {
  return (
    <div>
      <button onClick={() => window.location.assign("/")}>Refresh</button>
    </div>
  );
}
