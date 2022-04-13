import * as React from "react";
import ErrorBoundary, { ErrorLayout } from "components/error-boundary/index";
import Home from "pages/home";

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorLayout />}>
      <Home />
    </ErrorBoundary>
  );
}
