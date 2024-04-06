/** TAC SERVICE BOOKING APP NAVBAR FORM COMPONENT FILE **/

/* Importing the necessary dependencies */
import { Link } from "react-router-dom";
import { useLogOut } from "../../hooks/useLogOut";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faSignOut } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  /* Getting and destructuring/extracting user information from authentication context */
  const { user } = useAuthContext();
  const { firstName, lastName } = user;

  /* Destructuring the logOut function from the custom useLogOut hook */
  const { logOut } = useLogOut();

  /* Function for handling user logout */
  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="navbar nav-footer">
      <Link to="/">
        <span className="nav-logo-container">
          T
          <span className="nav-logo">
            <FontAwesomeIcon icon={faCar} />
          </span>
          C
        </span>
      </Link>
      <div className="avatar">
        <span>
          {firstName} {lastName}
        </span>
        <button className="logout-btn" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut} />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
