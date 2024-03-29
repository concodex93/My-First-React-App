// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = "Click Me!";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name here
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take the react component and display on UI
ReactDOM.render(<App />, document.querySelector("#root"));
