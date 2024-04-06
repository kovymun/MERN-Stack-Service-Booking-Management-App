/** TAC SERVICE BOOKING APP CREATE ACCOUNT FORM COMPONENT FILE **/
/*
 * This component represents the account creation form for the TAC Service Booking App.
 * It allows users to enter their personal information and create an account to access the application.
 */

/* Importing the necessary dependencies */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useCreateAcc } from "../../hooks/useCreateAcc";

const CreateAcc = () => {
  /* Destructuring the react-hook-form library useForm hook for form handling and validation */
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  /* React state for toggling password visibility */
  const [passwordType, setPasswordType] = useState("password");

  /* Variable to get current year copyright information */
  const year = new Date().getFullYear();

  /* Regular expression variables for alphabetic name and email validation */
  const alphabeticPattern = new RegExp(/^[A-Za-z]+$/);
  const emailRegexPattern = new RegExp(/\w+@\w+\.\w+/);

  /* Instance of the useCreateAcc hook for account creation */
  const { createAcc } = useCreateAcc();

  /* Function to toggle password visibility. Triggered by the "eye-icon" */
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  /* Function to verify if a user entered password meets certain strength criteria */
  const isStrongPassword = (password) => {
    const minLength = 10;
    const hasUpperCaseLetter = /[A-Z]/.test(password);
    const hasLowerCaseLetter = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCaseLetter &&
      hasLowerCaseLetter &&
      hasNumber &&
      hasSpecialCharacter
    );
  };

  /* Function to format first and last names with the first letter capitalized and the rest in lowercase */
  const formatName = (name) => {
    const format = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return format;
  };

  /* Function to handle the account creation process */
  const handleCreateAccount = async (createAccCredentials) => {
    const { firstName, lastName } = createAccCredentials;
    createAccCredentials.firstName = formatName(firstName);
    createAccCredentials.lastName = formatName(lastName);
    await createAcc(createAccCredentials);
    reset();
  };

  return (
    <section className="create-acc-section login-section">
      <div className="create-account-container login-container">
        {/* Auth Create Account Brand Logo */}
        <div className="auth-logo-container">
          <span className="auth-logo">
            T
            <span className="logo">
              <FontAwesomeIcon icon={faCar} />
            </span>
            C
          </span>
        </div>

        {/* Auth Create Account Title */}
        <h2 className="auth-title">Create Account</h2>

        <form onSubmit={handleSubmit(handleCreateAccount)} noValidate>
          {/* Auth Create Account Personal Credentials */}
          <div className="auth-form-input-container">
            {/* Auth Create Account Form Input - First Name */}
            <div
              className={`input-form-container ${
                errors.firstName ? "auth-error-container" : ""
              }`}
            >
              <input
                className="auth-form-input"
                type="text"
                placeholder="First Name*"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                  pattern: {
                    value: alphabeticPattern,
                    message:
                      "First name can only contain alphabetical letters [A - Z]",
                  },
                })}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName.message}</p>
              )}
            </div>

            {/* Auth Create Account Form Input - Last Name */}
            <div
              className={`input-form-container ${
                errors.lastName ? "auth-error-container" : ""
              }`}
            >
              <input
                className="auth-form-input"
                type="text"
                placeholder="Last Name*"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                  pattern: {
                    value: alphabeticPattern,
                    message:
                      "Last name can only contain alphabetical letters [A - Z]",
                  },
                })}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName.message}</p>
              )}
            </div>

            {/* Auth Create Account Form Input - Email Address */}
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
                    message: "Email address is required",
                  },
                  pattern: {
                    value: emailRegexPattern,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            {/* Auth Create Account Form Input - Password */}
            <div
              className={`input-form-container show-pass-icon ${
                errors.password ? "auth-error-container" : ""
              }`}
            >
              <input
                className="auth-form-input"
                name="password"
                type={passwordType}
                placeholder="Password*"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  validate: (input) =>
                    isStrongPassword(input) ||
                    "Password must be more than 10 characters, contains an uppercase letter, a lowercase letter, a number, and a special character",
                })}
              />
              <div className="eye-icon">
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
            </div>

            <div
              className={`input-form-container ${
                errors.confirmPassword ? "auth-error-container" : ""
              }`}
            >
              {/* Auth Create Account Form Input - Confirm Password */}
              <input
                className="auth-form-input"
                type="password"
                placeholder="Confirm Password*"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Please confirm password",
                  },
                  validate: (input) => {
                    return (
                      input === watch("password") || "Passwords do not match"
                    );
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="error-message">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Auth Create Account Form Input - Remember Me */}
          <div className="auth-options-container">
            <div className="auth-option-remember">
              <input
                className="auth-option-input"
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>

          {/* Create Account Button */}
          <button className="auth-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "SETTING UP YOUR ACCOUNT..." : "CREATE ACCOUNT"}
          </button>
          <div className="create-acc-link-container">
            <p>
              Already have an Account?
              <span className="link-container">
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
        </form>

        {/* 
        NOTE: This link directs users to Tyler's Auto Clinic's "terms and conditions page". As this is a fictitious company, it serves as a placeholder link 
        to demonstrate application functionality. This will be addressed in future revisions. 
        */}
        <div className="disclaimer-container create-acc-link-container">
          <p>
            By creating an account you agree to the
            <span className="link-container">
              <a href="/#">Terms of Service and Privacy Policy</a>
            </span>
          </p>
        </div>

        {/* 
        NOTE: This link directs users to Tyler's Auto Clinic's website for customers. As this is a fictitious company, it serves as a placeholder link 
        to demonstrate application functionality. This will be addressed in future revisions. 
        */}
        <div className="company-info-container company-info-create-acc-container">
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

export default CreateAcc;
