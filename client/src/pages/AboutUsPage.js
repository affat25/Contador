import React from "react";
import "animate.css";

function AboutUsPage(props) {
  return (
    <>
      <div className="row text-center justify-content-center">
        <h2 className="mb-3 animate__animated animate__fadeInUp ">About our project</h2>
        <p className="mb-5 animate__animated animate__fadeInUp col-10 col-md-8 col-lg-7">
          Contador is a finance management application that will allow users to track each and every buy they make. Contador allows users to record their monthly income, expenses and target goals to achieve. That may be their short-term or long-term
          goals. Their goals can be anything from saving for a downpayment on a house or going for a road trip to the poconos.
        </p>
        <h2 className="mb-3 animate__animated animate__fadeInUp ">About our Team</h2>

        {/* Anthony's information */}
        <div className="p-5 animate__animated animate__fadeIn col-10 col-md-8 col-lg-7">
          <div className="col aa-about-us">
            <h3>Anthony Duran</h3>

            <div class=" align-items-start">
              <div class="col-md ">
                <div>
                  <img src="Spaghetti.png" alt="Spaghetti"></img>
                </div>
              </div>
            </div>

            <p className="  mt-3  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, optio rem ut temporibus praesentium debitis iusto vero id? Dolores libero voluptate nobis accusantium eos ad inventore reiciendis, cumque dolorum consequatur atque
              numquam rerum doloribus sit quos ab. Porro, ipsam enim.
              <br></br>
              <br></br>
              GitHub:{" "}
              <a href="https://github.com/Code1Here" target="_blank" rel="noopener noreferrer">
                Code1Here
              </a>
              , Full Stack Developer
            </p>
          </div>
        </div>

        {/* Affat's information */}
        <div className="p-5 animate__animated animate__fadeIn col-10 col-md-8 col-lg-7">
          <div className="col aa-about-us">
            <h3>Affat Asir</h3>

            <div class=" align-items-start">
              <div class="col-md">
                <div>
                  <img className="img-fluid" src="Spaghetti.png" alt="Spaghetti"></img>
                </div>
              </div>
            </div>

            <p className="  mt-3  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, optio rem ut temporibus praesentium debitis iusto vero id? Dolores libero voluptate nobis accusantium eos ad inventore reiciendis, cumque dolorum consequatur atque
              numquam rerum doloribus sit quos ab. Porro, ipsam enim.
              <br></br>
              <br></br>
              GitHub:{" "}
              <a href="https://github.com/affat25" target="_blank" rel="noopener noreferrer">
                affat25
              </a>
              , Front-end Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
