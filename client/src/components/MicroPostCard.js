import React from "react";
import { Link } from "react-router-dom";
import DeleteTransaction from "./DeleteCategory";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faPlus} from '@fortawesome/free-solid-svg-icons'


function MicroPostCard({ content, totalCategorySpend, id  }) {
  if(!totalCategorySpend) {
    totalCategorySpend = 0;
  }

  return (
    // aa-border-bottom
    <>
      <div className="col-10 col-md-8 col-lg-7 pt-3">
        <Link to={"/account/" + id} className="aa-link">
          <div className="d-flex div-pulse">
          <div className="d-inline text-start p-1 me-auto">
            {content}
          </div>
          <div className="d-inline text-end p-1">${parseFloat(totalCategorySpend).toFixed(2)}</div>
          <DeleteTransaction id={id}/>
        </div>
        </Link>
        <hr></hr>
      </div>
    </>
  );
}

export default MicroPostCard;

/* <div className="col-10 col-md-8 col-lg-7">
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
        <DeleteCategory id={id}/> */
