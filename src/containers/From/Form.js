import React, { useState } from "react";

import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button.js";
import { validate } from "../../utils/validate";

export const Form = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] =useState("");
  const [view, setView] = useState(true);

  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  const onChangeMail = (event) => {
    setMail(event.target.value);
  };

  const onClick = () => {
    if (view?validate(login, pass):validate(login,pass,mail)) alert("OK");
    else alert("Login and password cannot contain less than 8 chars");
  };

  const changeView = () => {
    setView(!view);
  };

  return (
    <div>
      {view ? (
        <div>
          <Input value={login} placeholder="Enter your login" onChange={onChangeLogin} />
          <Input value={pass} placeholder="Enter your password" onChange={onChangePass} type="password" />
          <Button onClick={onClick}>Log in</Button>
          <p onClick={changeView}>Sing up</p>
        </div>
      ) : (
        <div>
          <Input value={login} placeholder="Enter your login" onChange={onChangeLogin} />
          <Input value={mail} placeholder="Enter your email" onChange={onChangeMail} />
          <Input value={pass} placeholder="Enter your password" onChange={onChangePass} type="password" />
          <Button onClick={onClick}>Sign up</Button>
          <p onClick={changeView}>Log in</p>
        </div>
      )}
    </div>
  );
};

