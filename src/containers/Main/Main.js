import React from "react";

import { Form } from "../From/Form";
import ProductList from "../../containers/ProductList/ProductList"

import "./Main.scss";

export const Main = ({ children }) => {
  return (
    <div className="Main">
      Main content
      <Form />
      <ProductList/>
      {children}
    </div>
  );
};
