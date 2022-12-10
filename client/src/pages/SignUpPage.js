import React, { useState } from "react";

function SignUpPage(props) {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <>
      <div className="container mt-4">
        <h1>Sign up</h1>
        <form className="row g-3 mt-2">
          <div className="col-md-6">
            <label for="firstName" className="form-label">
              First Name *
            </label>
            <input type="text" className="form-control" id="firstName" required autocomplete="off"></input>
          </div>
          <div className="col-md-6">
            <label for="lastName" className="form-label">
              Last Name *
            </label>
            <input type="text" className="form-control" id="lastName" required autocomplete="off"></input>
          </div>
          <div className="col-md-10">
            <label for="emailInfo" className="form-label">
              Email *
            </label>
            <input type="email" className="form-control" id="emailInfo" required></input>
          </div>
          <div className="col-md-2">
            <label for="birthDate" className="form-label">
              Date of birth *
            </label>
            <input type="date" className="form-control" id="birthDate" required></input>
          </div>

          {/* vvvvvvvvv */}
          <div className="col-md-6 ">
            <label for="genderIdentity" className="form-label">
              Gender Identity *
            </label>
            <input className="form-control bi bi-caret-down-fill text-end" list="datalistOptions" id="genderIdentity" placeholder="Please Select   ">
              {/**Trying to use bootstrap icon for a caret here using bi-caret but it isnt rendering */}
              {/* Do we want to allow user input? */}
            </input>
            <datalist id="datalistOptions">
              <option value="Agender"></option>
              <option value="Genderfluid"></option>
              <option value="Gender non-conforming"></option>
              <option value="Genderqueer"></option>
              <option value="Man"></option>
              <option value="Non-binary"></option>
              <option value="Woman"></option>
              <option value="Not Listed"></option>
              <option value="I choose to not disclose"></option>
            </datalist>
          </div>

          {/* <div className="col-md-6 dropdown">
            <label for="genderIdentity" className="form-label">
              Gender Identity *
            </label>

            <button className="btn dropdown-toggle border text-end form-control text-muted" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Please Select{" "}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
          </div> */}

          {/* ^^^^^^^^^ */}

          <div className="col-md-6">
            <label for="monthlyIncome" className="form-label">
              Monthly Income *
            </label>
            <input type="number" className="form-control" id="monthlyIncome" required autocomplete="off"></input>
          </div>
          <div className="col-md-12">
            <label for="comments" className="form-label">
              About me
            </label>
            <textarea className="form-control" id="comments" rows="3" placeholder="Say something good about yourself! You could mention a fund target goal!"></textarea>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
