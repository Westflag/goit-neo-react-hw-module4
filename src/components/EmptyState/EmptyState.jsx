import css from './EmptyState.module.css';

export default function EmptyState({ title, message }) {
    return (
        <div className={css.wrapper}>
            <span className={css.icon}>🔍</span>
            <h2 className={css.title}>{title}</h2>
            <p className={css.message}>{message}</p>
        </div>
    );
}
