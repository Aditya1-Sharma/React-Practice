import React from "react";
import { people } from "./Data.js";
function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
function List() {
  const listItems = people.map((person) => {
    return (
      <ol
        key={person.id}
        style={{
          //   alignItems: "center",
          textAlign: "start",
          textDecoration: "underline",
        }}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </ol>
    );
  });
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export default List;
