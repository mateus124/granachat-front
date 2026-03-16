import HistoryItem from '../HistoryItem/HistoryItem';
import styles from './HistoryCard.module.css';

const HistoryCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>Transações Recentes</h3>
            </div>
            <div className={styles.content}>
                <ul>
                  <HistoryItem
                    title = "Supermercado Silva"
                    desc = "Hoje, 14:30"
                    value={-320.10}
                  />  
                  <HistoryItem
                    title = "Posto São Pedro"
                    desc = "ontem, 16:27"
                    value={-50.10}
                  />
                  <HistoryItem
                    title = "Salário"
                    desc = "ontem, 12:00"
                    value={1610.10}
                  />
                </ul>
            </div>
            <div className={styles.link}>
                <a href="#">Ver todo o histórico</a>
            </div>
        </div>
    )
}

export default HistoryCard