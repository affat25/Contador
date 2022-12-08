import React from "react";
import "./BalanceForward.css"


// Sum divide goal amount by time
function BalanceForward(){
    const income = 2000;
    const expense = 1900;
    const balanceForward = income-expense
    return (
    <>
    <div className="balanceforward"><h4 className="p-2 border rounded text-white bg-success">Balance Forward {balanceForward}</h4>
        <span className="tooltiptext">Nice Job You have met your Target</span>
    </div> 
    </>
    )
}
export default BalanceForward;