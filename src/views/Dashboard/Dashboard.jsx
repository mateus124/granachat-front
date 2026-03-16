import Menu from '../../components/Menu/Menu';
import CardSalary from '../../components/CardSalary/CardSalary';
import GainCard from '../../components/GainCard/GainCard';
import TipIA from '../../components/TipIA/TipIA';
import GraphicCard from '../../components/GraphCard/GraphCard';
import HistoryCard from '../../components/HistoryCard/HistoryCard';
import Header from '../../components/Header/Header';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <main className={styles.main}>
            <Menu/>
            <div className={styles.dashboard}>
                <Header title="Resumo financeiro"/>
                <div className={styles.dash}>
                    <CardSalary/>
                    <GainCard/>
                    <TipIA/>
                </div>
                <div className={styles.stats}>
                    <GraphicCard/>
                    <HistoryCard/>
                </div>
            </div>
        </main>
    )
}

export default Dashboard