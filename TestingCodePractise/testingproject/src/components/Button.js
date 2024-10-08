import React, { useState } from "react";
import "../styles/Button.css"; // Adjust the path according to your file structure

const Button = ({ label = [] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="button-container">
      <hr />
      <h1>Button section</h1>
      <ul>
        {label.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button> Start Learning</button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
      <hr />
    </div>
  );
};

export default Button;
