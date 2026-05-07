import { useEffect, useRef } from "react";

function withLogger(WrappedComponent) {
  const enhancedComponent = (props) => {
    const prevProps = useRef({ ...props });

    useEffect(() => {
      const changedProps = Object.entries(props).filter(
        ([key, value]) => prevProps.current[key] !== value,
      );

      console.log(`${WrappedComponent.name} Renderd`);

      changedProps.length === 0
        ? console.log("No Props Changed")
        : console.log("Props Changed: ", changedProps);
      prevProps.current = props;
    });

    return <WrappedComponent {...props} />;
  };

  return enhancedComponent;
}

export default withLogger;
