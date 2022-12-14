import React from "react";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';

function MonthlyIncome(){
    
    const Income = 2000;
    return (
        <div className="col-10 col-md-8 col-lg-7">
          <div className="d-flex flex-row justify-content-around card" style={{"width":"450px"}}>
            <div className="d-flex flex-row justify-content-around card-body align-text-center" style={{"width":"100px"}}>
            <div>
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                style={{"color":"green"}}
                type="button"
                size="6x"
                />
              </div>
              <div>Monthly Income: {Income}</div>
            </div>
          </div>
        </div>
      );
}
export default MonthlyIncome;