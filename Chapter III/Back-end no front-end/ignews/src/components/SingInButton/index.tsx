import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SingnInButton() {
    const iUserLoggerdIn = true;

    return iUserLoggerdIn ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#04d361" />
           Raul Sigoli
           <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#eba417" />
           Faça login com GitHub
        </button>
    );
}