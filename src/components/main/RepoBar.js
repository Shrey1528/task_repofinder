import React from "react";
import "../css/RepoBar.css";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
const RepoBar = ({ followers, following, no_repo }) => {
  return (
    <div className="repo-bar">
      <p>
        Followers <span className="bar-number">{followers}</span>
      </p>
      <p>
        Following <span className="bar-number">{following}</span>
      </p>
      <p>
        No. of Repositories <span className="bar-number">{no_repo}</span>
      </p>
    </div>
  );
};

export default RepoBar;
const fadeInAnimation = keyframes`${fadeIn}`;
export const fadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;
