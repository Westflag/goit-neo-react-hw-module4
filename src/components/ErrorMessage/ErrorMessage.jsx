import { useEffect, useState } from 'react';
import css from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [message]);

    if (!visible) return null;

    return <p className={css.error}>Error: {message}</p>;
}
