import "./App.css";
import React from "react";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";
import ScrollingImage from "./ScrollingImage";
import Video from "./Video";
function App() {
  return (
    <>
      <Practice1 />
      <hr style={{ border: "3px solid black" }} />
      <Practice2 />
      <hr style={{ border: "3px solid black" }} />
      <ScrollingImage />
      <hr style={{ border: "3px solid black" }} />
      <Video />
    </>
  );
}
export default App;
