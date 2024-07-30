import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  //   console.log(career);
  return (
    <div className="career-details">
      <h2>
        Career Details for{" "}
        <span style={{ color: "yellowGreen" }}>{career.title}</span>
      </h2>
      <p>Starting Salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum
        natus soluta, consectetur in doloremque, itaque maxime dolor, iste
        dolores sapiente corrupti atque repudiandae autem dignissimos magni
        facere voluptatibus accusantium?
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  console.log(id);

  const res = await fetch("http://localhost:4000/careers/" + id);

  //   console.log(res);
  if (!res.ok) {
    throw Error("Could not find that error");
  }
  return res.json();
};
