import React from "react";

interface WithAuthProps {
  isAuthenticated: boolean;
}

function withAuthentication<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithAuthProps> {
  return function AuthenticatedComponent({
    isAuthenticated,
    ...props
  }: WithAuthProps & P) {
    if (!isAuthenticated) {
      return <div>Access Denied. Please Login.</div>;
    }

    return <WrappedComponent {...(props as P)} />;
  };
}

export default withAuthentication;
