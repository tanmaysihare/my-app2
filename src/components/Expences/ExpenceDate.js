import './ExpenceDate.css'
import Card from '../UI/Card';
function ExpenceDate(props){
    const Month=props.date.toLocaleString('en-us',{month:'long'});
    const Day=props.date.toLocaleString('en-us',{day:'2-digit'});
    const Year=props.date.getFullYear();
return (
    
        <Card className="expense-date">
            <div className="expense-date__month">{Month}</div>
            <div className="expense-date__day">{Day}</div>
            <div className="expense-date__year">{Year}</div>
           </Card>

);
}
export default ExpenceDate;