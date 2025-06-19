import React from "react";
import { Image } from "../App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Props {
  images: Image[];
  onImageClick: (url: string) => void;
}

export default function ImageGallery({ images, onImageClick }: Props) {
  return (
    <ul className={css.gallery}>
      {images.map((image, index) => (
        <li key={`${image.id}-${index}`} className={css.item}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
