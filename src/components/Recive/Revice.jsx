import styles from './Recive.module.css';
import Logo from '../Logo/Logo';

const Recive = ({content}) => {
    return (
        <div className={styles.recive}>
            <div className={styles.logo}>
                <Logo compact={true}/>      
            </div>      
            <p className={styles.message}>{content}</p>
        </div>
    )
}

export default Recive