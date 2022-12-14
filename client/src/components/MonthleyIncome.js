import React from "react";
import AddCategory from "./AddCategory";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons';

function MonthlyIncome(){
    
    const Income = 2500;
    return (
      <>
      <div className="col-10 col-md-8 col-lg-7 pt-3 ">
        <div className="d-flex ">
          <div className="d-inline text-start p-2 me-auto">
          <FontAwesomeIcon
                icon={faMoneyBill1Wave}
                style={{"color":"green"}}
                type="button"
                size="4x"
                />
          </div>
          <div className="d-inline text-end p-2">Monthly Income: ${Income}.00 
            <div className="pt-2 mb-3">
              <AddCategory/> 
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
      );
}
export default MonthlyIncome;