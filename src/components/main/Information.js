import React from "react";
import "../css/Information.css";
import { AiOutlineLink } from "react-icons/ai";
import { ImLocation, ImTwitter } from "react-icons/im";
import { BiWorld } from "react-icons/bi";

import { fadeIn, fadeInLeft, bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const Information = ({
  avatar,
  name,
  bio,
  blog,
  location,
  twitter,
  profile,
}) => {
  return (
    <FadeInDiv className="info-card">
      <BounceInDiv className="image-container">
        <img src={avatar} alt="avatar" />
        <div className="link-container">
          <AiOutlineLink className="icon" />
          <p>{profile}</p>
        </div>
      </BounceInDiv>
      <FadeInLeftDiv className="info-container">
        <h3>{name}</h3>
        <p>{bio}</p>
        {blog || location || twitter ? (
          <div className="links">
            {blog ? (
              <div className="blog">
                <BiWorld className="icon-blog" />
                <p>{blog}</p>
              </div>
            ) : (
              ""
            )}
            {location ? (
              <div className="location">
                <ImLocation className="icon" />
                <p>{location}</p>
              </div>
            ) : (
              ""
            )}
            {twitter ? (
              <div className="twitter">
                <ImTwitter className="icon-twitter" />
                <p> {twitter}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </FadeInLeftDiv>
    </FadeInDiv>
  );
};

export default Information;

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const BounceInAnimation = keyframes`${bounceIn}`;

export const FadeInDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;
export const FadeInLeftDiv = styled.div`
  animation: 2s ${fadeInLeftAnimation};
`;
export const BounceInDiv = styled.div`
  animation: 2s ${BounceInAnimation};
`;
