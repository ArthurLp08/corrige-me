
import styles from './styles.module.css';
import { FaSpinner } from 'react-icons/fa';

export default function Loader() {

    return (
        <div className={styles.loader}>
            <div></div>
        </div>
    )
}