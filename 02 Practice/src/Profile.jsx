import React from "react";
import Link from "@mui/material/Link";
const user = {
  name: "Selena Gomez",
  imageUrl:
    "https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_FMjpg_UX1000_.jpg",
  imageSize: 190,
};

function handleClick() {
  alert("You searched for selena gomez");
}
function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt="No image to display"
        style={{
          width: user.imageSize,
          border: `2px solid black`,
          borderRadius: "50%",
          display: "block",
        }}
      />
      <button onClick={handleClick}>Click me</button>
      <Link href="https://www.youtube.com/selenagomez">Selena Gomez</Link>;
    </>
  );
}

export default Profile;
