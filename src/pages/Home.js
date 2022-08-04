import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  let navigate = useNavigate();

  const [repoName, setRepoName] = useState("");
  const handleSubmit = () => {
    navigate(`/${repoName}`);
  };

  return (
    <div className="home">
      <div className="form-container">
        <div className="form">
          <h1>FindRepo</h1>
          <input
            type="text"
            placeholder="Enter Github username..."
            value={repoName}
            onChange={(e) => {
              setRepoName(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
