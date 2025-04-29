import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, image, alt }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={css.overlay}
            className={css.content}
        >
            {image && (
                <img
                    className={css.image}
                    src={image}
                    alt={alt || 'Image preview'}
                />
            )}
        </Modal>
    );
}
