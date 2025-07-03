import { Component, type ComponentType, type ErrorInfo } from "react";

function withErrorBoundary<P>(
  WrappedComponent: ComponentType<P>,
  FallbackComponent: ComponentType
) {
  return class ErrorBoundary extends Component<P, { hasError: boolean }> {
    constructor(props: P) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
      console.error("Error caught by ErrorBoundary:", error, info);
    }

    render() {
      if (this.state.hasError) {
        return <FallbackComponent />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withErrorBoundary;

// usage

// export function ComponentThatMayFail() {
//   throw new Error("Oops");
// }

// function FallbackUI() {
//   return <h1>Something went wrong.</h1>;
// }

// const SafeComponent = WithErrorBoundary(ComponentThatMayFail, FallbackUI);
