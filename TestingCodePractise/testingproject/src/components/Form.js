import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <div data-testid="custHtml">Custom Html Element Form </div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="fullname" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <span title="closing">X</span>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>

        <button>Submit </button>
      </form>
    </div>
  );
};

export default Form;
