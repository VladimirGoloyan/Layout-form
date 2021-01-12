import React from "react";

export const Input = (props) => {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} type={props.type} />
    </div>
  );
};
