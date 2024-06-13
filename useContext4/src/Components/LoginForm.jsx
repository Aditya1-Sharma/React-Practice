import React from "react";
import { useContext, useState } from "react";
import { CurrentUserContext, Button } from "../App";

function LoginForm() {
  const { setcurrentUser } = useContext(CurrentUserContext);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const canLogin = firstName.trim() !== "" && lastName.trim() !== "";
  return (
    <>
      <label>
        First Name{": "}
        <input
          required
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name{": "}
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setcurrentUser({
            name: firstName + " " + lastName,
          });
        }}>
        Log in
      </Button>
      {!canLogin && <i>Fill both the field</i>}
    </>
  );
}

export default LoginForm;
