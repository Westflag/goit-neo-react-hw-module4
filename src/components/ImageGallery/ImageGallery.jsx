import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
    if (images.length === 0) return null;

    return (
        <ul className={css.gallery}>
            {images.map(({ id, urls, alt_description }) => (
                <li key={id}>
                    <ImageCard
                        src={urls.small}
                        alt={alt_description}
                        onClick={() => onImageClick(urls.regular, alt_description)}
                    />
                </li>
            ))}
        </ul>
    );
}
