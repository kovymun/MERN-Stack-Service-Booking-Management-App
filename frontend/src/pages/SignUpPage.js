/**TAC SERVICE BOOKING APP SIGN-UP PAGE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";
import Header from "../components/header-components/Header";
import { Button, Form, Col, Row } from "react-bootstrap";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const { signUp, error, isLoading } = useSignUp();

  /* admin user secret key */
  const adminSecretKey = process.env.REACT_APP_ADMIN_SECRET_KEY;

  const handleSignUp = async (event) => {
    if (role === "admin" && secretKey !== adminSecretKey) {
      event.preventDefault();
      alert("Invalid Admin");
    } else {
      event.preventDefault();
      await signUp(email, password, role);
    }
  };

  /* Arrow function to toggle the display of the radio button admin/normal-user selections */
  const isChecked = (value) => {
    return value === role;
  };

  return (
    <div>
      <Header />
      <div className="sign-login-container">
        <div className="sign-up-form">
          <h5 className="sign-up-form-title mb-4 text-center">SIGN UP</h5>
          <Form onSubmit={handleSignUp}>
            {/* Grouping all the radio buttons in the sign-up form */}
            <h6>Sign-Up as:</h6>
            <Form.Check
              type="radio"
              label="Admin"
              value="admin"
              id="admin"
              checked={isChecked("admin")}
              onChange={(event) => setRole(event.target.value)}
            />
            <Form.Check
              className="mb-2"
              type="radio"
              label="User"
              value="user"
              id="user"
              checked={isChecked("user")}
              onChange={(event) => setRole(event.target.value)}
            />
            {role === "admin" ? (
              // Admin user secret key input form
              <Form.Group as={Row}>
                <h6 className="secret-key">Secret Key:</h6>
                <Col lg="12">
                  <Form.Control
                    type="text"
                    name="key"
                    value={secretKey}
                    onChange={(event) => setSecretKey(event.target.value)}
                    className="mb-2"
                    placeholder="Secret Key..."
                  />
                </Col>
              </Form.Group>
            ) : null}

            <Form.Group as={Row}>
              <h6 className="user-title">Email:</h6>
              <Col lg="12">
                <Form.Control
                  type="text"
                  name="user"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mb-2"
                  placeholder="Enter Email Address..."
                  // maxLength="6"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <h6 className="password-title">Password:</h6>
              <Col lg="12">
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mb-2"
                  placeholder="Enter Password..."
                />
              </Col>
            </Form.Group>
            <Button
              className="mt-2"
              variant="light"
              type="submit"
              disabled={isLoading}
            >
              SIGN UP
            </Button>
            {error && <div className="error">{error}</div>}
          </Form>
        </div>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
React-Bootstrap Components:
Utilized the React-Bootstrap Button, Form, Col, Row components as an interface, for the user to enter their sign-up credentials.
Referenced the React-Bootstrap documentation website for this information.
https://react-bootstrap.github.io/
*/
