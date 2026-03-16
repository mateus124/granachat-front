import styles from './Sent.module.css';

const Sent = ({content}) => {
    return (
        <div className={styles.message}>
            {content}
        </div>
    )
}

export default Sent