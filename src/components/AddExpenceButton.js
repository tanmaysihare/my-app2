import React, { useState } from "react";
import NewExpence from "./NewExpence";

function AddExpenceButton() {
  const [showNewExpence, setShowNewExpence] = useState(false);

  const buttonHandler = () => {
    setShowNewExpence(true);
  };
  const addExpenceHandler1 = (props)=>{
    props.addExpenceHandler();
  }

  return (
    <div className="MainBody1">
      {!showNewExpence && (
        <button className="btn btn-primary" onClick={buttonHandler}>
          ADD EXPENSE
        </button>
      )}

      {showNewExpence && <NewExpence onAddExpence={addExpenceHandler1} />}
    </div>
  );
}

export default AddExpenceButton;
