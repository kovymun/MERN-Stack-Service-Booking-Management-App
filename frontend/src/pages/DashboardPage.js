/** TAC SERVICE BOOKING APP DASHBOARD PAGE **/

import Navbar from "../components/navbar-components/Navbar";
import DashBoard from "../components/dashboard-components/Dashboard";
import Footer from "../components/footer-components/Footer";
import HelpModal from "../components/modal-components/HelpModal";
import DeleteConfirmModal from "../components/modal-components/DeleteConfirmModal";

const DashboardPage = () => {
  return (
    <div className="app-page">
      <Navbar />
      <DashBoard />
      <HelpModal />
      <DeleteConfirmModal />
      <Footer />
    </div>
  );
};

export default DashboardPage;
