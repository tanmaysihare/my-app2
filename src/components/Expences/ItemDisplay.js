import './ExpenceItem.css';

import ExpanceDetails from './ExpanceDetails';
import Card from '../UI/Card';
function ItemDisplay(props){
  
    return(
        <Card>
           <div>
           <ExpanceDetails
            date={props.items[0].date}
            expanceName={props.items[0].expanceName}
            location={props.items[0].location}
            amount={props.items[0].amount}
            />
            <ExpanceDetails
            date={props.items[1].date}
            expanceName={props.items[1].expanceName}
            location={props.items[1].location}
            amount={props.items[1].amount}
            />
            <ExpanceDetails
            date={props.items[2].date}
            expanceName={props.items[2].expanceName}
            location={props.items[2].location}
            amount={props.items[2].amount}
            />
            <ExpanceDetails
            date={props.items[3].date}
            expanceName={props.items[3].expanceName}
            location={props.items[3].location}
            amount={props.items[3].amount}
            />
           </div>
        </Card>
        
    );
}
export default ItemDisplay;