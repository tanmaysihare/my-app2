import React from "react";
import ExpanceDetails from "./ExpanceDetails";
const ExpencesList = (props) => {
  
    if(props.items.length === 1){
      return ( 
        <div>
        {props.items.map((item) => (
    <ExpanceDetails
      key={item.id} 
      date={item.date}
      expanceName={item.expanceName}
      location={item.location}
      amount={item.amount}
    />
  ))
  }
  <h2>NO DATA FOUND ON A SELECTED DATE</h2>
    </div>
      )
  
    }
    return(
        <div>
            {props.items.map((item) => (
        <ExpanceDetails
          key={item.id} 
          date={item.date}
          expanceName={item.expanceName}
          location={item.location}
          amount={item.amount}
        />
      ))
      }
        </div>

    );
}
export default ExpencesList;