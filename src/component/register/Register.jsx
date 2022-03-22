import React, { useState, useEffect } from "react";
import "../login/login.css";
import { ReactComponent as Logo } from "../../images/workflow-mark-indigo-600.svg";
import { ReactComponent as Lock } from "../../images/lock.svg";

const Register = () => {
  const initialValue = { name: "", email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "email is require";
    } else if (!regex.test(values.email)) {
      error.email = "invalid email";
    }
    if (!values.password) {
      error.password = "password is require";
    } else if (values.password.length < 4) {
      error.password = "password most be more than three character";
    }
    if (!values.name) {
      error.name = "name required";
    }
    return error;
  };
  return (
    <div className="login" id="register">
      <div className="container">
        <div className="imageContainer">
          <Logo />
        </div>
        <div className="loginContainer">
          <h1 className="loginHeader">Sign up for an account</h1>
          <form onSubmit={handleSubmit} className="inputContainer">
            <div className="loginDetails">
              <label htmlFor="">Name</label>
              <input
                type="text"
                value={formValue.name}
                name="name"
                placeholder="name... "
                onChange={handleChange}
              />
              <p>{formErrors.name}</p>
            </div>
            <div className="loginDetails">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={formValue.email}
                name="email"
                placeholder="email..."
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </div>
            <div className="loginDetails">
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={formValue.password}
                name="password"
                placeholder="password...."
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>
            </div>
            <div className="loginButton">
              <Lock className="logo" />
              <button type="submit">Sign Up</button>
            </div>
          </form>

          <p className="notes">
            Already have an account? <a href="#login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
