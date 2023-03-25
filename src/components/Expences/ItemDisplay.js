import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
import ExpanceDetails from './ExpanceDetails';
import Card from '../UI/Card';
function ItemDisplay(props){
  
    return(
        <Card className="expense-item">
           <ExpenceDate date={props.date}/>
           <ExpanceDetails expanceName={props.expanceName} location={props.location} amount={props.amount}/>
           <div></div>
        </Card>
        
    );
}
export default ItemDisplay;