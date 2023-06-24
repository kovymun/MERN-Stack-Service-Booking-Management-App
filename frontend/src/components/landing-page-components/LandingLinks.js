/**TAC SERVICE BOOKING APP LANDING PAGE LOGIN LINKS SECTION*/

import { Link } from "react-router-dom";

export default function LandingLinks() {
  return (
    <div className="landing-links-contents">
      <Link className="login-link" to="/login">
        Login
      </Link>
      <Link className="login-link" to="/sign-up">
        Sign Up
      </Link>
    </div>
  );
}
