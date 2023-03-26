import './ItemDisplay.css';

import ExpanceDetails from './ExpanceDetails';
import Card from '../UI/Card';
function ItemDisplay(props){
  
    return(
        <Card>
           <div>
          
             {props.items.map((item) => (
          <ExpanceDetails
            key={item.id} // Make sure to assign a unique key to each rendered component
            date={item.date}
            expanceName={item.expanceName}
            location={item.location}
            amount={item.amount}
          />
        ))}
           </div>
        </Card>
        
    );
}
export default ItemDisplay;