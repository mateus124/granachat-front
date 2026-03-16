import styles from './IndicationDay.module.css';

const IndicationDay = ({content}) => {
    return (
        <div className={styles.day}>{content}</div>
    )
}

export default IndicationDay