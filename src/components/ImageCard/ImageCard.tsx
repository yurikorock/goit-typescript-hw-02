import React from "react";

import { Image } from "../App.types";
import css from "./ImageCard.module.css";

interface Prop {
  image: Image;
  onImageClick: (url: string) => void;
}

export default function ImageCard({ image, onImageClick }: Prop) {
  return (
    <div className={css.card} onClick={() => onImageClick(image.urls.regular)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
}
