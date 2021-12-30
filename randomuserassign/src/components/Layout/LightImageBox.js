import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./LightImageBox.css";

export const LightImageBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="openbtn" type="button" onClick={() => setIsOpen(true)}>
        <img src={props.thumbnail} alt="userThumbnail"/>
      </button>

      {isOpen && (
        <Lightbox
          mainSrc={props.userImg}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
