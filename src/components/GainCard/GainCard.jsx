import { MdAddCard } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import styles from './GainCard.module.css';

const GainCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <p>Ganhos Mensais Adicionais</p>
                <MdAddCard size={26} color="#7311D4"/>
            </div>
            <h2 className={styles.money}>R$ 3.240,50</h2>
            <div className={styles.subtitle}>
                <CiClock2 />
                <p>Última atualização: Hoje, 10:45</p>
            </div>
        </div>
    )
}

export default GainCard