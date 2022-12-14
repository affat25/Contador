import React from "react";
import { Link } from "react-router-dom";

function TransactionPostCard({ itemName, price, createdAt, MicroPostId }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          {itemName}
          {/* {price} */}
        </div>
        {/* <div className="card-footer small text-muted text-end">{createdAt.slice(0, -14)}</div> */}
      </div>
    </div>
  );
}

export default TransactionPostCard;
