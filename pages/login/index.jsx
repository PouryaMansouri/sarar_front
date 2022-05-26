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

function Login() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showLogin, setshowLogin] = useState(true);
  // TODo: call api to login

  const handleSubmit = async (e) => {
    e.preventDefault();

    let milad = await http.post(
      "https://nakhll.com/api/v1/auth/begin/login_register/",
      {
        mobile: Email,
      }
    );

    if (milad.status === 201) {
      router.push("/");
    } else {
      toast.error("Login UnSuccessfully", { theme: "colored" });
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
                    <div
                      className="nav-link active border-no lh-1 ls-normal"
                      onClick={() => setshowLogin(true)}
                      style={{
                        fontSize: "3rem",
                        color: "#222",
                        cursor: "pointer",
                      }}
                    >
                      Login
                    </div>
                  </li>
                </ul>
                <div className="tab-content">
                  {showLogin && (
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
                    </div>
                  )}
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
