import './ItemDisplay.css';
import React,{useState} from 'react';
import ExpencesFilter from './ExpencesFilter';
import ExpanceDetails from './ExpanceDetails';
import Card from '../UI/Card';
function ItemDisplay(props){
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpences = props.items.filter(expence =>{
    return expence.date.getFullYear().toString() === filteredYear; 
  });
  let filterdContent = <p>NO DATA FOUND ON A SELECTED DATE</p>;
  
  if(filteredExpences.length > 0){
    filterdContent = filteredExpences.map((item) => (
      <ExpanceDetails
        key={item.id} // Make sure to assign a unique key to each rendered component
        date={item.date}
        expanceName={item.expanceName}
        location={item.location}
        amount={item.amount}
      />
    ));
  }
    return(
        <Card>
           <div>
          <ExpencesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {filterdContent}
    
           </div>
        </Card>
        
    );
}
export default ItemDisplay;