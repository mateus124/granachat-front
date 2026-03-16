import styles from './Logo.module.css'
import { BsWallet2 } from "react-icons/bs";

const Logo = ({ compact = false }) => {
    return (
        <div className={`${styles.logo} ${compact ? styles.compact : ''}`}>
            <div className={styles.icon}>
                <BsWallet2 />
            </div>
            {!compact && <p>GranaChat</p>}
        </div>
    )
}

export default Logo