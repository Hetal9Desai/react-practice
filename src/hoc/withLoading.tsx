// import React from "react";
// import Loading from "../components/Loading";

// interface WithLoadingProps {
//   loading: boolean;
// }

// const withLoading = <P extends object>(
//   WrappedComponent: React.ComponentType<P>
// ): React.FC<P & WithLoadingProps> => {
//   const ComponentWithLoading = ({
//     loading,
//     ...props
//   }: WithLoadingProps & P) => {
//     if (loading) {
//       return <Loading />;
//     }

//     return <WrappedComponent {...(props as P)} />;
//   };

//   return ComponentWithLoading;
// };

// export default withLoading;

// import React from "react";
// import Loading from "../components/Loading";

// const withLoading = (WrappedComponent) => {
//   const ComponentWithLoading = ({ loading, ...props }) => {
//     if (loading) {
//       return <Loading />;
//     }

//     return <WrappedComponent {...props} />;
//   };

//   return ComponentWithLoading;
// };

// export default withLoading;

// import React from "react";
// import Loading from "../components/Loading";

// interface WithLoadingProps {
//   loading: boolean;
// }

// function withLoading<P extends object>(
//   InputComponent: React.FC<P>
// ): React.FC<P & WithLoadingProps> {
//   const OutputComponent: React.FC<P & WithLoadingProps> = ({ loading, ...props }) => {
//     if (loading) {
//       return <Loading />;
//     }
//     return <InputComponent {...(props as P)} />;
//   };

//   return OutputComponent;
// }

// export default withLoading;

import Loading from "../components/Loading";

interface WithLoadingProps {
  loading: boolean;
}

function withLoading<P extends object>(
  InputComponent: React.FC<P>
): React.FC<P & WithLoadingProps> {
  const OutPutComponent: React.FC<P & WithLoadingProps> = ({
    loading,
    ...props
  }) => {
    if (loading) {
      return <Loading />;
    }
    return <InputComponent {...(props as P)} />;
  };
  return OutPutComponent;
}

export default withLoading;
