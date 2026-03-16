import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import IndicationDay from '../../components/IndicationDay/IndicationDay';
import Sent from '../../components/Sent/Sent';
import Recive from '../../components/Recive/Revice';
import styles from './Chat.module.css';

const Chat = () => {
    return (
        <main className={styles.main}>
            <Menu/>
            <div className={styles.content}>
                <Header title="GranaChat"/>
                <div className={styles.chat}>
                    <IndicationDay content="Hoje"/>
                    <Sent content="Hoje gastei 50 reais em pizza"/>
                    <Recive content="Entendido! Acabei de registrar esse gasto para você."/>
                </div>
            </div>
        </main>
    )
}

export default Chat
