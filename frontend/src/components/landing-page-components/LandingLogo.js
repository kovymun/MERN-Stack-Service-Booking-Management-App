/**TAC SERVICE BOOKING APP LANDING PAGE LOGO/TITLE SECTION*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

export default function LandingLogo() {
  return (
    <div className="landing-logo-contents">
      <h2 className="landing-logo">
        T
        <span>
          <FontAwesomeIcon icon={faCar} />
        </span>
        C
      </h2>
      <h2 className="landing-title">Tyler's Auto Clinic</h2>
    </div>
  );
}
