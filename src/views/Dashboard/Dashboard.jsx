import Menu from '../../components/Menu/Menu';
import CardSalary from '../../components/CardSalary/CardSalary';
import GainCard from '../../components/GainCard/GainCard';
import styles from './Dashboard.module.css';
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
    return (
        <main className={styles.main}>
            <Menu/>
            <div className={styles.dashboard}>
                <div className={styles.header}>
                    <h2>Resumo Financeiro</h2>
                    <div className={styles.icons}>
                        <IoMdNotifications size={26} />
                        <CgProfile size={26} />
                    </div>
                </div>
                <div className={styles.dash}>
                    <CardSalary/>
                    <GainCard/>
                </div>
            </div>
        </main>
    )
}

export default Dashboard