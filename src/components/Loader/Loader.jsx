import { PuffLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.loaderWrapper}>
            <PuffLoader color="#36d7b7" size={60} />
        </div>
    );
}
