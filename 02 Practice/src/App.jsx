import CounterUpdateSimul from "./CounterUpdateSimul";
import Profile from "./Profile";
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
    </>
  );
}

export default App;
