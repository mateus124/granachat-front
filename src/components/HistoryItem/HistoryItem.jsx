import { RiMoneyDollarCircleLine } from "react-icons/ri";
import styles from './HistoryItem.module.css';

const HistoryItem = ({title, desc, value}) => {
    return (
        <li className={styles.item}>
            <div
                className={styles.icon}
                style={{ backgroundColor: value >= 0 ? "#26d23b" : "#EF4444" }}
            >
                <RiMoneyDollarCircleLine size={26}/>
            </div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
            <div className={styles.value} style={{ color: value >= 0 ? "#26d23b" : "#EF4444" }}>
                R$ {value}
            </div>
        </li>
    )
}

export default HistoryItem