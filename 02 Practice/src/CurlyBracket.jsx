import { containerClasses } from "@mui/material";
import React from "react";
const person = {
  name: "Selena Gomez",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  size: "20%",
};
function CurlyBracket() {
  return (
    <>
      <div style={person.theme}>
        <h1>{person.name}</h1>
        <img
          src="https://people.com/thmb/xNmg_e9zLeZvPTtgBQoKR7aKGco=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Selena-Gomez-Selena-Gomez-Rare-Beauty-Make-a-Call-Campaign-052324-5d190d17b7fa44f49f32493c9b603248.jpg"
          alt=""
          className="avatar"
          width={person.size}
          //   border="21px solid red"
          style={{ borderRadius: "50%", display: containerClasses }}
        />

        <ul>
          <li>Improve the Product</li>
          <li>Changes on Marketing strategies</li>
          <li>Increase the price of product</li>
        </ul>
      </div>
    </>
  );
}

export default CurlyBracket;
