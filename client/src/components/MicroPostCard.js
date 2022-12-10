import React from "react";
import { Link } from "react-router-dom";

function MicroPostCard({ content, createdAt, id }) {
  const total = 10;
  return (
    // aa-border-bottom
    <>
      <div className="col-10 col-md-8 col-lg-7 pt-3 ">
        <div className="d-flex ">
          <div className="d-inline text-start p-1 me-auto">
            <Link to={"/account/" + id}>{content}</Link>
          </div>
          <div className="d-inline text-end p-1">{total}</div>
          {/* <div className="card-footer small text-muted text-end">
          {createdAt.slice(0, -14)}
        </div> */}
        </div>
        <hr></hr>
      </div>
    </>
  );
}

export default MicroPostCard;
