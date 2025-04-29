import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        onSubmit(input.trim());
        setInput('');
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={input}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}
