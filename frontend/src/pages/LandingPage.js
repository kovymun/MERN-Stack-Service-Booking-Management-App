/** TAC SERVICE BOOKING APP LANDING PAGE **/

import LandingBrand from "../components/landing-page-components/LandingBrand";
import Login from "../components/auth-form-components/Login";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <LandingBrand />
      <Login />
    </section>
  );
};

export default LandingPage;
