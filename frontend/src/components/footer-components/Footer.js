/** TAC SERVICE BOOKING APP REACT FOOTER COMPONENT FILE **/
/*
 * This component represents the footer section, displaying branding information for the TAC Service Booking App.
 */

/* Importing the necessary dependencies */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer nav-footer">
      <span className="copyright-icon">
        <FontAwesomeIcon icon={faCopyright} />
      </span>
      Tyler's Auto Clinic | All Rights Reserved
    </footer>
  );
}
