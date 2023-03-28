import React from "react";
import ExpanceDetails from "./ExpanceDetails";
const ExpencesList = (props) => {
  
    if(props.items.length === 0){
      return  <h2>NO DATA FOUND ON A SELECTED DATE</h2>;
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