import { FaChartPie } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";

const GraphCard = () => {
    return (
        <div>
            <div className="header">
                <div>
                    <h3>Distribuição de Despesas</h3>
                    <p>Análise de gastos por categoria</p>
                </div>
                <div>
                    <button><FaChartPie/> Pizza</button>
                    <button><IoStatsChartSharp/> Barras</button>
                </div>
            </div>
        </div>
    )
}

export default GraphCard