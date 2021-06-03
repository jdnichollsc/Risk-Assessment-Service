import React, { useEffect, useState } from "react";

import Gravatar from "./Gravatar";

import { gravatarUrlAndEmail, IMAGE_SIZE } from "./utils";

const GravatarList = ({ state }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const diff = state.images - images.length;
    if (diff > 0) {
      const newImages = [];
      for (let index = 0; index < diff; index++) {
        newImages.push(gravatarUrlAndEmail(IMAGE_SIZE));
      }
      setImages(images => images.concat(newImages));
    }
  }, [state.images, images])

  return images.map((img, index) => (
    <Gravatar key={index} email={img.email} url={img.url} />
  ));
};
export default GravatarList;
