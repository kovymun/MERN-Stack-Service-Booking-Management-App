/** TAC SERVICE BOOKING APP LOGIN FORM COMPONENT FILE **/
/*
 * This component represents the login form for the TAC Service Booking App.
 * It allows the user to enter their login credentials to authenticate themselves into the application.
 */

/* Importing the necessary dependencies */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  /*  React state for toggling password visibility */
  const [passwordType, setPasswordType] = useState("password");

  /* Destructuring the react-hook-form library useForm hook for form handling and validation */
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  /* Variable to get current year copyright information */
  const year = new Date().getFullYear();

  /* Initializing the custom login hook and extracting the login Error for handling user authentication */
  const { login, loginError } = useLogin();

  /* Function to toggle password visibility. Triggered by the "eye-icon" */
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  /* Function to handle the login process */
  const handleLogin = async (loginCredentials) => {
    await login(loginCredentials);
    reset();
  };

  return (
    <section className="login-section">
      <div className="login-container">
        {/* Auth Login Brand Logo */}
        <div className="auth-logo-container">
          <span className="auth-logo">
            T
            <span className="logo">
              <FontAwesomeIcon icon={faCar} />
            </span>
            C
          </span>
        </div>

        {/* Auth Login Title */}
        <h2 className="auth-title">Login To Your Account</h2>

        <form onSubmit={handleSubmit(handleLogin)} noValidate>
          {/* Auth Login Form Input - Email Address */}
          <div className="auth-form-input-container">
            <div
              className={`input-form-container ${
                errors.email ? "auth-error-container" : ""
              }`}
            >
              <input
                className="auth-form-input"
                type="text"
                placeholder="Email Address*"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter email address",
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            {/* Auth Login Form Input - Password */}
            <div
              className={`input-form-container show-pass-icon ${
                errors.password || loginError ? "auth-error-container" : ""
              }`}
            >
              <input
                className="auth-form-input"
                type={passwordType}
                placeholder="Password*"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter password",
                  },
                })}
              />
              <div className="eye-icon" title="show">
                <span className="inline-eye-container" onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </span>
              </div>

              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
              {loginError && <p className="error-message">{loginError}</p>}
            </div>
          </div>

          {/* Remember login credentials section - login credentials saved to local storage */}
          <div className="auth-options-container">
            <div className="auth-option-remember">
              <input
                className="auth-option-input"
                type="checkbox"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>

          {/* Login Button */}
          <button className="auth-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "AUTHENTICATING..." : "LOGIN"}
          </button>
        </form>

        <div className="create-acc-link-container">
          <p>
            Don't have an Account?
            <span className="link-container">
              <Link to="/create-account">Create Account</Link>
            </span>
          </p>
        </div>

        {/* 
        NOTE: This link directs users to Tyler's Auto Clinic's website for customers. As this is a fictitious company, it serves as a placeholder link 
        to demonstrate application functionality. This will be addressed in future revisions. 
        */}
        <div className="company-info-container company-info-login-container">
          <p>
            Copyright {year}
            <span className="link-container">
              <a href="/#">Tyler's Auto Clinic</a>
            </span>
            | All Right's Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
