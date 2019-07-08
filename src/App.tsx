import React from "react";

const App: React.FunctionComponent<{
  compiler: string;
  framework: string;
}> = props => {
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <p>Hello World! Lambda9</p>
    </div>
  );
};

export default App;
