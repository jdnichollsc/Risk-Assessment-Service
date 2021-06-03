import React from "react";

const Header = ({ children }) => {
  const headerElem = window.document.createElement("header");
  const titleElem = window.document.createElement("h1");
  titleElem.textContent = children || "Facewall";

  headerElem.appendChild(titleElem);
  window.root.append(headerElem);

  return null;
};

export default React.memo(Header);
