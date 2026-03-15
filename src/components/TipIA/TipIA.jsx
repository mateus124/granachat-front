import { BsStars } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import styles from './TipIA.module.css';

const TipIA = () => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <BsStars size={22} />
                </div>
                <div>
                    <h3 className={styles.title}>Dica da IA</h3>
                    <p className={styles.desc}>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae sit repellendus blanditiis cupiditate sunt. Ratione, saepe! Odit nesciunt, illum repudiandae, cum rerum ea nisi non blanditiis ipsam ut temporibus. Veritatis."</p>
                </div>
            </div>
            <a href="#" className={styles.details}>Ver detalhes do plano de investimento <FaArrowRight/></a>
        </div>
    )
}

export default TipIA