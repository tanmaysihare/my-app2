import React from "react";
import Chart from "../chart/Chart";

const ExpenceChart = (props) => {
    const chartDataPoints = [
        { label:'JAN', value: 0},
        { label:'FEB', value: 0},
        { label:'MAR', value: 0},
        { label:'APR', value: 0},
        { label:'MAY', value: 0},
        { label:'JUN', value: 0},
        { label:'JUL', value: 0},
        { label:'AUG', value: 0},
        { label:'SEP', value: 0},
        { label:'OCT', value: 0},
        { label:'NOV', value: 0},
        { label:'DEC', value: 0},
    ];
    for(const expence of props.expences){
        const expenceMonth = expence.date.getMonth();
        chartDataPoints[expenceMonth].value += expence.amount;
    }
    return (
        <Chart dataPoints={chartDataPoints}/>
    );
};
export default ExpenceChart;