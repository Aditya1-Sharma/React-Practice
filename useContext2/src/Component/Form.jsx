import React, { useContext } from "react";
import { ThemeContext } from "../App";
function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign Up</Button>
      <Button>Sign In</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
export default Form;
