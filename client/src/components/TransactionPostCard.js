import React from "react";
import { Link } from "react-router-dom";

function TransactionPostCard({ itemName, price, createdAt, MicroPostId }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="d-flex">
        <div className="d-inline text-start p-1 me-auto">{itemName}</div>
        <div className="d-inline text-end p-1">${parseFloat(price).toFixed(2)}</div>
      </div>
      <hr className=""></hr> {/* mt-2 mb-4 */}
    </div>
  );
}

export default TransactionPostCard;
