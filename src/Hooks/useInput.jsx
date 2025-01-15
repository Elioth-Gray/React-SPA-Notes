import React from "react";

const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  const handleValueChange = (event) => setValue(event.target.value);
  return [value, handleValueChange];
};
export default useInput;
