import React from "react";

// Sum divide goal amount by time
function Target(){
    const goal = 1200;
    const time = 12;
    const target = goal/time;
    return (
    <h4 className="p-2 border rounded text-white bg-primary">Target: {target}</h4>
    );
}
export default Target