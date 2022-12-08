import React from "react";

// Sum divide goal amount by time
function BalanceForward(){
    const income = 2000;
    const expense = 1900;
    const balanceForward = income-expense
    return (
    <h4 className="p-2 border rounded text-white bg-success">Balance Forward: {balanceForward}</h4>
    )
}
export default BalanceForward;