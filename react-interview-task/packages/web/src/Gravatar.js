import React, { useCallback } from "react";

const Gravatar = ({ email, url }) => {
  const onGravaterPress = useCallback((event) => {
    event.target.classList.toggle("is-highlighted")
    alert(email);
  }, [email])

  return (
    <img
      alt="Gravatar"
      src={url}
      onClick={onGravaterPress}
    />
  );
};

export default React.memo(Gravatar);
