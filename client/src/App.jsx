import Index from "./components/Client/DashBoardComponent/Dashborad";
import ClientHeader from "./pages/Header/ClientHeader";
import FreelancerHeader from "./pages/Header/FreelacerHeader";
import MobileNav from "./pages/Header/Header";
import Routers from "./pages/Routes/Routers";
function App() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <Routers />
        {/* <ClientHeader /> */}
        {/* <FreelancerHeader /> */}
        {/* <MobileNav /> */}
      </section>
    </main>
  );
}

export default App;
