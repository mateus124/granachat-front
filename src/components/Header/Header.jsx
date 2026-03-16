import styles from './Header.module.css';
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = ({title}) => {
    return (
        <div className={styles.header}>
            <h2>{title}</h2>
            <div className={styles.icons}>
                <IoMdNotifications size={26} />
                <CgProfile size={26} />
            </div>
        </div>
    )
}

export default Header