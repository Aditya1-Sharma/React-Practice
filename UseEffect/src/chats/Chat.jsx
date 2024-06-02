import React, { useEffect, useState } from "react";
import { createConnection } from "./ChatServer";

function ChatRoom({ roomId }) {
  const [serverUrl, setserverUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
  console.log(serverUrl);

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setserverUrl(e.target.value)}
        />
      </label>
      <h1>
        Welcome to the {roomId} room on this {serverUrl} server!!!
      </h1>
    </>
  );
}
function Chat() {
  const [roomId, setroomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room
        <select
          name="roomId"
          id="room"
          value={roomId}
          onChange={(e) => setroomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "close chat" : "open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

export default Chat;
