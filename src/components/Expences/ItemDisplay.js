import './ItemDisplay.css';
import React,{useState} from 'react';
import ExpencesFilter from './ExpencesFilter';
import ExpencesList from './ExpencesList';
import Card from '../UI/Card';
function ItemDisplay(props){
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpences = props.items.filter(expence =>{
    return expence.date.getFullYear().toString() === filteredYear; 
  });
 
    return(
        <Card>
           <div>
          <ExpencesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpencesList items={filteredExpences}/>
    
           </div>
        </Card>
        
    );
}
export default ItemDisplay;