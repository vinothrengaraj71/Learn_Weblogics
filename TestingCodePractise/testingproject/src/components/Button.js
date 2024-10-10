import React, { useState, useEffect } from "react";
import "../styles/Button.css"; // Adjust the path according to your file structure

const Button = ({ label = [] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);

  // //if you want to setTimeout of more than 1000s then you have to initialize timeout in the test case

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(false);
    }, 2000);
  }, []);
  // useEffect(() => {
  //   const loginTimeout = setTimeout(() => setIsLoggedIn(true), 500);
  //   const logoutTimeout = setTimeout(() => setIsLoggedIn(false), 2000);

  //   return () => {
  //     clearTimeout(loginTimeout);
  //     clearTimeout(logoutTimeout);
  //   };
  // }, []);

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
