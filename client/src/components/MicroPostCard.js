import React from "react";
import { Link } from "react-router-dom";
import DeleteTransaction from "./DeleteCategory";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faPlus} from '@fortawesome/free-solid-svg-icons'


function MicroPostCard({ content, createdAt, id }) {
  return (
    // aa-border-bottom
    <>
      <div className="col-10 col-md-8 col-lg-7 pt-3 ">
        <div className="d-flex ">
        <Link to={"/account/" + id}>
              <FontAwesomeIcon
              icon={faPlus}
              style={{"color":"purple"}}
              type="button"
              />
            </Link>
          <div className="d-inline text-start p-2 me-auto">
            {content}
          </div>
          <div className="d-inline text-end p-2">100</div>
          <DeleteTransaction id={id}/>
        </div>
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
