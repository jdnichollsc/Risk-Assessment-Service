import React, { useState } from "react";

import GravatarList from "./GravatarList";
import Header from "./Header";
import { calculateNumberOfImages } from "./utils";

import './styles.css';

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
    <div className='container'>
      <Header />
      <GravatarList state={state} />
    </div>
  );
};

export default App;
