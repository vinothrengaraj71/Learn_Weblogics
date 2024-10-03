import React, { useState } from "react";

const Button = () => {
  const [value, setValue] = useState("Click Me");

  const valueChange = () => {
    setValue("Clicked On");
  };

  return (
    <div>
      <h2>Hi</h2>
      <button onClick={valueChange} title="dummyButton">
        {value}
      </button>
    </div>
  );
};

export default Button;

export const reverseString = (val) => {
  return val.split("").reverse().join("");
};
