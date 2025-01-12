import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/archived">archived</Link>
        </li>
        <li>
          <Link to="/add">Add Note</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
