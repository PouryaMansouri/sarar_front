import React, { useState } from "react";
import { http } from "../../service/callApi/api";
import Router, { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

const InputLogin = ({ type, id, placeholder }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        id={id}
        name={id}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
function RegisterPage() {
  const router = useRouter();

  // TODo: call api to login

  const registerSubmit = async (e) => {
    e.preventDefault();

    let answer = await http.post(
      "https://sarar-mansouri.fandogh.cloud/api/accounts/register/",
      {
        email: e.target[0].value,
        first_name: e.target[1].value,
        last_name: e.target[2].value,
        password: e.target[3].value,
        phone_number: e.target[4].value,
      }
    );
    if (answer.status === 201) {
      toast.success("Register Successfully");
      setTimeout(() => {
        router.push("/login");
      }, 4000);
    } else {
      toast.error("Register UnSuccessfully", { theme: "colored" });
    }
  };

  return (
    <>
      <ToastContainer autoClose={50000} position="top-center" />
      <div className="page-content mt-6 pb-2 mb-10">
        <div className="container">
          <div className="login-popup">
            <div className="form-box">
              <div className="tab tab-nav-simple tab-nav-boxed form-tab">
                <ul
                  className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5"
                  role="tablist"
                >
                  <li className="nav-item">
                    <div
                      className="nav-link border-no lh-1 ls-normal"
                      onClick={() => setshowLogin(false)}
                      style={{
                        fontSize: "3rem",
                        color: "#222",
                        cursor: "pointer",
                      }}
                    >
                      Register
                    </div>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane" id="register">
                    <form onSubmit={registerSubmit}>
                      <InputLogin
                        type="email"
                        id="email"
                        placeholder="Your Email address *"
                      />
                      <InputLogin
                        type="text"
                        id=""
                        placeholder="First Name *"
                      />
                      <InputLogin type="" id="" placeholder="Last Name *" />
                      <InputLogin type="" id="" placeholder="Phone Number *" />
                      <InputLogin
                        type="text"
                        id="password"
                        placeholder="Password *"
                      />

                      <div className="form-footer">
                        <div className="form-checkbox">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            id="register-agree"
                            name="register-agree"
                            required
                          />
                          <label
                            className="form-control-label"
                            htmlFor="register-agree"
                          >
                            I agree to the privacy policy
                          </label>
                        </div>
                      </div>
                      <button
                        className="btn btn-dark btn-block btn-rounded"
                        type="submit"
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
