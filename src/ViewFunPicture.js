import React from 'react';

function ViewFunPicture() {
  console.log("Viewing a fun picture");

  return (
    <img
      src={process.env.REACT_APP_ApiBase + "getRandomFunPicture"}
      alt="A fun picture" 
    width="800" />
  );
}

export default ViewFunPicture;
