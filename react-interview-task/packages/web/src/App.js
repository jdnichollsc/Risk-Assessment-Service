import React, { useState } from "react";

import GravatarList from "./GravatarList";
import Header from "./Header";
import { calculateNumberOfImages } from "./utils";

const App = () => {
  const [state, setState] = useState(() => {
    window.addEventListener("scroll", () => {
      setState({ images: calculateNumberOfImages() });
    });

    window.addEventListener("resize", () => {
      setState({ images: calculateNumberOfImages() });
    });

    return { images: calculateNumberOfImages() };
  });

  return (
    <div>
      <Header />
      <GravatarList state={state} />
    </div>
  );
};

export default App;
