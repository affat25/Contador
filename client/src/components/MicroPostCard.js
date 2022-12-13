import React from "react";
import { Link } from "react-router-dom";

function MicroPostCard({ content, totalCategorySpend, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7 ">
      <Link to={"/account/" + id}>
        <div className="d-flex div-pulse">
          <div className="d-inline text-start p-1 me-auto">{content}</div>
          <div className="d-inline text-end p-1">${parseFloat(totalCategorySpend).toFixed(2)}</div>
        </div>{" "}
      </Link>
      <hr className=""></hr> {/* mt-2 mb-4 */}
    </div>
  );
}

export default MicroPostCard;
