/**TAC SERVICE BOOKING APP LANDING PAGE*/

import LandingLinks from "../components/landing-page-components/LandingLinks";
import LandingLogo from "../components/landing-page-components/LandingLogo";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-contents">
        <LandingLogo />
        <LandingLinks />
      </div>
    </div>
  );
}
