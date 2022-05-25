import React, { useState } from "react";
import { http } from "../../service/callApi/api";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // TODo: call api to login

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Email, Password);
    let milad = await http.post(
      "https://nakhll.com/api/v1/auth/begin/login_register/",
      {
        mobile: Email,
      }
    );

    if (milad.status === 201) {
      router.push("/");
    } else {
      toast.error("Login UnSuccessfully");
    }
  };

  return (
    <>
      {" "}
      <ToastContainer />
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
                    <a
                      className="nav-link active border-no lh-1 ls-normal"
                      href="#signin"
                    >
                      Login
                    </a>
                  </li>
                  <li className="delimiter">or</li>
                  <li className="nav-item">
                    <a
                      className="nav-link border-no lh-1 ls-normal"
                      href="#register"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="signin">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <input
                          value={Email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          id="singin-email"
                          name="singin-email"
                          placeholder="Username or Email Address *"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          value={Password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          type="password"
                          className="form-control"
                          id="singin-password"
                          name="singin-password"
                          placeholder="Password *"
                          required
                        />
                      </div>
                      <div className="form-footer">
                        <div className="form-checkbox">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            id="signin-remember"
                            name="signin-remember"
                          />
                          <label
                            className="form-control-label"
                            htmlFor="signin-remember"
                          >
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="lost-link">
                          Lost your password?
                        </a>
                      </div>
                      <button
                        className="btn btn-dark btn-block btn-rounded"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>
                    <div className="form-choice text-center">
                      <label className="ls-m">or Login With</label>
                      <div className="social-links">
                        <a
                          href="#"
                          className="social-link social-google fab fa-google border-no"
                        />
                        <a
                          href="#"
                          className="social-link social-facebook fab fa-facebook-f border-no"
                        />
                        <a
                          href="#"
                          className="social-link social-twitter fab fa-twitter border-no"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="register">
                    <form action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="register-email"
                          name="register-email"
                          placeholder="Your Email address *"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="register-password"
                          name="register-password"
                          placeholder="Password *"
                          required
                        />
                      </div>
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
                    <div className="form-choice text-center">
                      <label className="ls-m">or Register With</label>
                      <div className="social-links">
                        <a
                          href="#"
                          className="social-link social-google fab fa-google border-no"
                        />
                        <a
                          href="#"
                          className="social-link social-facebook fab fa-facebook-f border-no"
                        />
                        <a
                          href="#"
                          className="social-link social-twitter fab fa-twitter border-no"
                        />
                      </div>
                    </div>
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

export default Login;
