import React from "react";

import { gravatarUrl, IMAGE_SIZE } from "./utils";

const Gravatar = () => {
  return (
    <img
      alt="Gravatar"
      src={gravatarUrl(IMAGE_SIZE)}
      onClick={(event) => event.target.classList.toggle("is-highlighted")}
    />
  );
};

export default React.memo(Gravatar);
