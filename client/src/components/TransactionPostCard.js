import React from "react";
import DeleteTransaction from "./DeleteTransaction";

function TransactionPostCard({ itemName, price, createdAt, MicroPostId, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="d-flex">
        <div className="d-inline text-start p-1 me-auto">{itemName}</div>
        <div className="d-inline text-end p-1">${parseFloat(price).toFixed(2)}</div>
        {/* <DeleteTransaction id={id}/> */}
      </div>
      <hr className=""></hr> {/* mt-2 mb-4 */}
    </div>
  );
}

export default TransactionPostCard;

// Affat's version
// function TransactionCard({ content, createdAt, id }) {
//   const total = 10;
//   return (
//     <div className="col-10 col-md-8 col-lg-7">
//       <div className="d-flex flex-row justify-content-around card" style={{"width":"450px"}}>
//         <div className="d-flex flex-row justify-content-between card-body align-text-center" style={{"width":"150px"}}>
//         <div className="card-footer small text-muted text-end">
//           {createdAt.slice(0, -14)}
//         </div>
//           <div>{content}</div>
//           <div className="pt-1 text-endt">{total}</div>
//         </div>
//         <DeleteTransaction id={id}/>
//       </div>
//     </div>
//   );
// }
