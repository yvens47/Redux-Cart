import React from "react";
import navbarMain from "./commons/navbar-main";

const MainLayout = props => {
  return (
    <React.Fragment>
      {props.navbar}
      {props.children}
    </React.Fragment>
  );
};

export default MainLayout;
