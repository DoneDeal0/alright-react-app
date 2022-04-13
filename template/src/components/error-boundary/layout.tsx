import React from "react";

export function ErrorLayout() {
  return (
    <Root>
      <button onClick={() => window.location.assign("/")}>Refresh</button>
    </Root>
  );
}
