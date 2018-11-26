import React from 'react';

function ViewFunPicture() {
  return (
    <img src={process.env.REACT_APP_ApiBase + "getRandomFunPicture"} alt="Cat" width="800" />
  );
}

export default ViewFunPicture;
