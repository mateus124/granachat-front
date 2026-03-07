import styles from './Logo.module.css'
import { BsWallet2 } from "react-icons/bs";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.icon}>
                <BsWallet2 />
            </div>
            <p>GranaChat</p>
        </div>
    )
}

export default Logo