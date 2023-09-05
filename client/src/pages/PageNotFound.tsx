import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h2>
        Can't find page Click{" "}
        <b>
          <Link to="/home">Here</Link>
        </b>{" "}
        to the home page{" "}
      </h2>
    </div>
  );
};

export default PageNotFound;
