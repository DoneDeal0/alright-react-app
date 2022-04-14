import { Component, ReactNode } from "react";
export { ErrorLayout } from "./layout";

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

export default class ErrorBoundary extends Component<Props> {
  state = { error: null };

  static defaultProps: Props = {
    fallback: [],
    children: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
