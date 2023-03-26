import './ItemDisplay.css';
import React,{useState} from 'react';
import ExpencesFilter from './ExpencesFilter';
import ExpanceDetails from './ExpanceDetails';
import Card from '../UI/Card';
function ItemDisplay(props){
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
    return(
        <Card>
           <div>
          <ExpencesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}>    </ExpencesFilter>
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