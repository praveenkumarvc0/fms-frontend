import React from "react";
import AppText from "../components/AppText";

const AppError = ({ errors }) => {
  return (
    <>
      <AppText style={{color:'orange',marginLeft:10,marginTop:-20}} >{errors}</AppText>
    </>
  );
};

export default AppError;