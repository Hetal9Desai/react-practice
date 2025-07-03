import React, { useState, type JSX } from "react";

function withTooltip<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  tooltipText: string
) {
  return function WithTooltipComponent(props: P): JSX.Element {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <WrappedComponent {...props} />
        {hovered && (
          <div
            style={{
              position: "absolute",
              top: "-1.5em",
              left: 0,
              backgroundColor: "black",
              color: "white",
              padding: "4px 8px",
              borderRadius: 4,
              fontSize: 12,
              whiteSpace: "nowrap",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            {tooltipText}
          </div>
        )}
      </div>
    );
  };
}

export default withTooltip;

// Declares a generic function called withTooltip.
// <P extends object> means the generic type P must be an object, representing the props of the wrapped component.
// Takes two arguments:
//     WrappedComponent: The React component you want to enhance with a tooltip. It accepts props of type P.
//     tooltipText: A string that will appear inside the tooltip.
// Returns a new React component named WithTooltipComponent.
// This new component takes the same props P as the original component.
// It returns JSX (JSX.Element), which is what React expects a component to return.
// Declares a state variable hovered initialized to false.
// hovered tracks whether the mouse is currently hovering over the component.
// setHovered is a function to update this state.
// Declares a state variable hovered initialized to false.
// hovered tracks whether the mouse is currently hovering over the component.
// setHovered is a function to update this state.
// Renders the original wrapped component inside the <div>.
// Passes down all props it received (props) to the wrapped component using the spread operator.
// This is a conditional rendering block:
// The tooltip <div> is rendered only if hovered is true.
// The content of the tooltip is the tooltipText string passed to the HOC.
