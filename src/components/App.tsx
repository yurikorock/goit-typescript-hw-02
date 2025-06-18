import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImagesByQuery } from "./helpers/unsplashApi.js";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./ImageModal/ImageModal";

import { Image } from "./App.types";
import { number } from "yup";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const loadMoreBtnRef = useRef<HTMLDivElement | null>(null);
  const [hasMoreImage, setHasMoreImage] = useState<boolean>(true);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSearch = (newSearch: string): void => {
    setQuery(newSearch);
    setPage(1);
    setImages([]);
    setHasMoreImage(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (images.length > 0 && loadMoreBtnRef.current) {
      loadMoreBtnRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [images]);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImagesByQuery(query, page);

        if (data.length === 0) {
          setHasMoreImage(false);
          if (page === 1) {
            toast.error("Зображення не знайдено");
          }
          return;
        }

        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
        setErrorMessage("Сталася помилка при завантаженні зображень!");
        toast.error("Error fetching images");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <div>
      <h1 className="title">Picture Search</h1>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {error && <ErrorMessage message={errorMessage} />}
      {!error && !isLoading && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && hasMoreImage && (
        <LoadMoreBtn onClick={handleLoadMore} innerRef={loadMoreBtnRef} />
      )}

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default App;
