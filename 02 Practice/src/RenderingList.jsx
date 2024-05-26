import React from "react";
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Mango", isFruit: true, id: 3 },
  { title: "Mango", isFruit: true, id: 4 },
];

function RenderingList() {
  const listItems = products.map((item) => (
    <li
      key={item.id}
      style={{ color: item.isFruit ? "magenta" : "yelloGreen" }}>
      <h3>{item.title}</h3>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default RenderingList;
