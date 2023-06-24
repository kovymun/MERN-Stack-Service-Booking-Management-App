/**TAC SERVICE BOOKING APP LOGIN PAGE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Header from "../components/header-components/Header";
import { Button, Form, Col, Row } from "react-bootstrap";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleLogin = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <div>
      <Header />
      <div className="sign-login-container">
        <div className="login-form">
          <h5 className="login-form-title mb-4 text-center">LOGIN</h5>
          <Form onSubmit={handleLogin}>
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
              LOGIN
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
Utilized the React-Bootstrap Button, Form, Col, Row components as an interface, for the user to enter their login credentials.
Referenced the React-Bootstrap documentation website for this information.
https://react-bootstrap.github.io/
*/
