import "./App.css";
import Chicken from "./Chicken";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Greeter from "./Greeter";
import ListPicker from "./ListPicker";

function App() {
  return (
    <>
      <Chicken />
      <Greeter person="Bill" from="COlt" />
      <Greeter person="Aditya" from="Laxmi Nagar" />
      <Greeter person="Akansha" from="Delhi" />
      <Greeter />

      {/* Passing non string argument as a props */}

      <Die numsides={20} />
      <Die numsides={2} />
      <Die numsides={10} />

      {/* Passing Array as an argument */}
      <ListPicker values={[12, 21, 23, 42, 15, 27]} />
      {/* <
      ListPicker values={{ a: 12, b: 21, c: 23, d: 42, e: 15, f: 27 }} /> */}

      {/* Double Dice */}

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </>
  );
}

export default App;
