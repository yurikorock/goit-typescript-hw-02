import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface Props {
  onSubmit: (value: string) => void;
}

export default function SearchBar({ onSubmit }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const search = formData.get("search");
    if (typeof search !== "string" || search.trim() === "") {
      toast.error("Необхідно ввести текст для пошуку зображень!", {
        duration: 1500,
        position: "top-right",
      });
      return;
    }

    event.currentTarget.reset();

    onSubmit(search);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
}
