import './ItemDisplay.css';
import React,{useState} from 'react';
import ExpencesFilter from './ExpencesFilter';
import ExpencesList from './ExpencesList';
import Card from '../UI/Card';
import ExpenceChart from './ExpencesChart';
function ItemDisplay(props){
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpences = props.items.filter((expence) => {
    return expence.date.getFullYear().toString() === filteredYear; 
  });
 
    return(
      <div>
        <Card className="expenses">
        
          <ExpencesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpenceChart expences={filteredExpences} />
          <ExpencesList items={filteredExpences}/>
    
          
        </Card>
        </div>
    );
}
export default ItemDisplay;