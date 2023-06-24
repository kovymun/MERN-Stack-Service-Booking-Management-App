/**TAC SERVICE BOOKING APP REACT HEADER COMPONENT FILE**/

import { Link } from "react-router-dom";
import { useLogOut } from "../../hooks/useLogOut";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import HelpModalAdmin from "./HelpModalAdmin";
import HelpModalNormal from "./HelpModalNormal";

export default function Header() {
  const [admin, setAdmin] = useState(false);
  const [normalUser, setNormalUser] = useState(false);

  const { logOut } = useLogOut();
  const { user } = useAuthContext();

  const handleLogOut = () => {
    logOut();
  };

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        setAdmin(true);
        setNormalUser(false);
      } else if (user.role === "user") {
        setNormalUser(true);
        setAdmin(false);
      }
    }
  }, [user]);

  return (
    <div className="app-header">
      {/* Link to the Home-Page via the brand logo */}
      <div className="brand-title">
        <Link
          className="brand-logo text-decoration-none text-white"
          to="/tyler's-auto-clinic"
        >
          <h2 className="header-logo">
            T
            <span>
              <FontAwesomeIcon icon={faCar} />
            </span>
            C
          </h2>
        </Link>
        {/* <h2 className="brand-heading">Tyler's Auto Clinic</h2> */}
      </div>

      {/* Modal Container - Model Help instructions rendered accordingly depending on Admin or Normal User login */}
      <div className="modal-container">
        {user && admin ? (
          <HelpModalAdmin />
        ) : user && normalUser ? (
          <HelpModalNormal />
        ) : null}
      </div>

      {/* {!user && (
        <div className="sign-login-links">
          <Link className="text-decoration-none text-white" to="/sign-up">
            SIGN UP
          </Link>
          |
          <Link className="text-decoration-none text-white" to="/login">
            LOGIN
          </Link>
        </div>
      )} */}

      {user && (
        <div className="logout-btn">
          <div className="user-email-display">Welcome {user.email}</div>
          <Button className="btn btn-light" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
}
