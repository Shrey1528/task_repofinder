import React from "react";
import "../css/Loader.css";
import { Audio } from "react-loader-spinner";
const loader = () => {
  return (
    <div className="loader">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="gray"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
      <p>Thanks for your patience!!</p>
    </div>
  );
};

export default loader;
