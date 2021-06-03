import React from "react";

import Gravatar from "./Gravatar";

const GravatarList = ({ state }) => {
  return Array.apply(null, Array(state.images)).map((_, index) => (
    <Gravatar key={index} />
  ));
};
export default GravatarList;
