/** TAC SERVICE BOOKING APP CREATE ACCOUNT PAGE **/

import CreateAcc from "../components/auth-form-components/CreateAcc";
import LandingBrand from "../components/landing-page-components/LandingBrand";

const CreateAccPage = () => {
  return (
    <section className="create-acc-page landing-page">
      <CreateAcc />
      <LandingBrand />
    </section>
  );
};

export default CreateAccPage;
