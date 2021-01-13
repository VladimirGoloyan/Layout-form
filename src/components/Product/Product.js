import React from "react";

import { Button } from "../../components/Button/Button";

const Product = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <img src={props.img} alt={props.name} />
      <div>
        <Button onClick={props.buttonClick}>Buy</Button>
      </div>
      {props.children}
    </div>
  );
};

export default Product;
