import css from "./LoadMoreBtn.module.css";
import React from "react";

interface Props {
  onClick: () => void;
  innerRef: React.Ref<HTMLButtonElement> | null;
}

export default function LoadMoreBtn({ onClick, innerRef }: Props) {
  return (
    <button onClick={onClick} ref={innerRef} className={css.btn}>
      Load more
    </button>
  );
}
