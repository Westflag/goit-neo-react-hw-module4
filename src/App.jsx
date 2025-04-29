import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

import { fetchImages } from './api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import EmptyState from './components/EmptyState/EmptyState';

Modal.setAppElement('#root');

export default function App() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [largeImage, setLargeImage] = useState({ url: '', alt: '' });

    useEffect(() => {
        if (!query) return;

        const loadImages = async () => {
            try {
                setIsLoading(true);
                const data = await fetchImages(query, page);
                setImages(prev => [...prev, ...data.results]);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadImages();
    }, [query, page]);

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
        setImages([]);
        setPage(1);
        setError(null);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const openModal = (url, alt) => {
        setLargeImage({ url, alt });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setLargeImage({ url: '', alt: '' });
    };

    return (
        <>
            <Toaster />
            <SearchBar onSubmit={handleSearch} />

            {error && <ErrorMessage message={error} />}

            <ImageGallery images={images} onImageClick={openModal} />

            {!isLoading && images.length === 0 && query && !error && (
                <EmptyState
                    title="Nothing found"
                    message="Try another keyword or check for typos"
                />
            )}

            {isLoading && <Loader />}

            {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}

            <ImageModal
                isOpen={showModal}
                onClose={closeModal}
                image={largeImage.url}
                alt={largeImage.alt}
            />

        </>
    );
}
