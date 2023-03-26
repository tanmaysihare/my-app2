import React from 'react';
import './Expence2.css'
import ExpenceForm from './ExpenceForm';

function NewExpence(props){
   const saveExpenceDataHandler = (enteredExpenceData) => {
    const expenceData = {
        ...enteredExpenceData,
        id: Math.random().toString()
    };
    props.onAddExpence(expenceData);
   };
       
    
   return (
        <div className="new-expense">
           <ExpenceForm onSaveExpanceData={saveExpenceDataHandler}/> 
        </div>
    );
};

export default NewExpence;