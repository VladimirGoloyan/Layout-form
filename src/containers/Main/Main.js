import React from "react";
import { Form } from "../From/Form";
import "./Main.scss";

export const Main = ({ children }) => {
  return (
    <div className="Main">
      Main content
      <Form />
      {children}
    </div>
  );
};
