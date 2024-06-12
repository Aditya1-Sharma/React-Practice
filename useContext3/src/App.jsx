import { createContext, useContext, useState } from "react";
import "./App.css";
export const CurrentUserContext = createContext(null);

function App() {
  const [currentUser, setcurrentUser] = useState(null);

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setcurrentUser }}>
        <Form />
      </CurrentUserContext.Provider>
    </>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setcurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}</p>;
  }
  return (
    <Button
      onClick={() => {
        setcurrentUser({ name: "Aditya" });
      }}>
      Logged in as {currentUser}
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default App;
