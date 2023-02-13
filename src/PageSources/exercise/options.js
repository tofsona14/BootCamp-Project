import React, { useState, useEffect } from "react";

const Example = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then(res => res.json())
      .then(data => {
        setOptions(data);
        console.log(data)
      });
  }, []);

  return (
    <select>
      {options.map(option => (
        <option key={option.id} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Example;