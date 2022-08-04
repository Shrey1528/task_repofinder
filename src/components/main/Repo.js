import React from "react";
import "../css/Repo.css";

const Repo = ({ name, desc, language }) => {
  return (
    <div className="repo">
      <div className="repo-name-container">
        <h5>{name}</h5>
        <p>{desc}</p>
        {language ? <p className="lang">{language}</p> : ""}
      </div>
    </div>
  );
};

export default Repo;
