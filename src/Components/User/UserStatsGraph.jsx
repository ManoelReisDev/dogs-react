import { useState, useEffect } from "react";
import styles from "./UserStatsGraph.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraph = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map(({ title, acessos }) => {
      return {
        x: title,
        y: Number(acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 20 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
          colorScale={["#3b82f6", "#9333ea", "#facc15", "#14b8a6", "#f97316", "#e11d48"]}
        />
      </div>
      <div className={`${styles.graphItem}`}> 
         <VictoryChart>
            <VictoryBar
              alignment="start"
              data={graph}
            />
         </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraph;
