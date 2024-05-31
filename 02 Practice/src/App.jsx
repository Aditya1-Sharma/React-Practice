import Clock from "./Clock/Clock";
import Conditional from "./ConditionalRendring/Conditional";
import CounterUpdateSimul from "./CounterUpdateSimul";
import CurlyBracket from "./CurlyBracket";
import PassingProps from "./PassingProps/PassingProps";
import Profile from "./Profile";
import List from "./Rendering List/List";
import RenderingList from "./RenderingList";
import UpdateCount from "./UpdateCount";

function App() {
  return (
    <>
      <Profile />
      <RenderingList />
      <div>
        <h1>Counter Update Seperately</h1>
        <UpdateCount />
        <UpdateCount />
      </div>

      <div>
        <CounterUpdateSimul />
      </div>
      <CurlyBracket />

      <PassingProps />
      <Conditional />

      <List />

      <Clock time={new Date()} />
    </>
  );
}

export default App;
