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
            <h1 id='h1'>WELCOME TO JAVASCRIPT REACT</h1>
           <ExpenceForm onSaveExpanceData={saveExpenceDataHandler}/> 
        </div>
    );
};

export default NewExpence;