import React from "react";
import "./BalanceForward.css"


// Sum divide goal amount by time
function BalanceForward(){
    const income = 2000;
    const expense = 1910;
    const target = 100
    const balanceForward = income-expense
    const percent = 100-((balanceForward/target)*100)
    if(balanceForward===target){
        return (
            <>
            <div className="balanceforward"><h4 className="p-2 border rounded text-white bg-success">Balance Forward: {balanceForward}</h4>
                <span className="tooltiptext">Nice Job! You have met your Target</span>
            </div> 
            </>
            )
    }else if(balanceForward>target){
        return (
            <>
            <div className="balanceforward"><h4 className="p-2 border rounded text-white" style={{"background-color":"#0E4732"}}>Balance Forward: {balanceForward}</h4>
                <span className="tooltiptext">Excellent! You have saved more than your Target!</span>
            </div> 
            </>
            )
    }else if(balanceForward<0){
        return (
            <>
            <div className="balanceforward"><h4 className="p-2 border rounded text-white bg-danger">Balance Forward: {balanceForward}</h4>
                <span className="tooltiptext">Your are spending more than your monthly income!</span>
            </div> 
            </>
            )
    }else if(balanceForward===0){
        return (
            <>
            <div className="balanceforward"><h4 className="p-2 border rounded text-white bg-warning">Balance Forward: {balanceForward}</h4>
                <span className="tooltiptext">You have not saved any money..</span>
            </div> 
            </>
            )
    }else{
        return (
            <>
            <div className="balanceforward"><h4 className="p-2 border rounded text-white" style={{"background-color":"#32CD32"}}>Balance Forward: {balanceForward}</h4>
                <span className="tooltiptext"> You are {percent}% away from your target, keep improving</span>
            </div> 
            </>
            )
    }
}
export default BalanceForward;