import React, { useState } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button.js";
import { validate } from "../../utils/validate";

export const Form = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  };
  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  const onClick = () => {
    if (validate(login, pass)) alert("OK");
    else alert("Login and password cannot contain less than 8 chars");
  };

  return (
    <div>
      <Input value={login} onChange={onChangeLogin} />
      <Input value={pass} onChange={onChangePass} type="password" />
      <Button onClick={onClick}>Sign up</Button>
    </div>
  );
};
