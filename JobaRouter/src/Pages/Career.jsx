import { Link, useLoaderData } from "react-router-dom";

function Career() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// Loader Function

export const carrersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json();
};

export default Career;
