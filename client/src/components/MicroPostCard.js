import React from "react";
import { Link } from "react-router-dom";
import DeleteCategory from "./DeleteCategory";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faPlus} from '@fortawesome/free-solid-svg-icons'


function MicroPostCard({ content, createdAt, id }) {
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

{/* <div className="col-10 col-md-8 col-lg-7">
      <div className="d-flex flex-row justify-content-around card" style={{"width":"450px"}}>
      <div>
      <Link to={"/posts/" + id}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{"color":"purple"}}
            type="button"
            />
      </Link>
      </div>
        <div className="d-flex flex-row justify-content-around card-body align-text-center" style={{"width":"100px"}}>
          <div>{content}</div>
        </div>
        <DeleteCategory id={id}/> */}
