import DayNight from "./components/DayNight";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProfileSideBar from "./components/ProfileSideBar";
import AboutMe from "./content/AboutMe";
import Clients from "./content/Clients";
import Service from "./content/Service";
import Nav1 from "./mobileResponsive/Nav1";
import Portfolio from "./portfilo/Portfolio";


function App() {
  return (
<div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
    
    <DayNight/>
    
    {/* mobile menu start */}
      <Nav1/>
    {/* mobile menu end */}

    <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        {/* sidber personal info */}
        <ProfileSideBar/>
        <div className="col-span-12 lg:col-span-8">
            {/* header for mobile devices start */}
            <NavBar/>
            {/* header for mobile devices end */}

            {/* about me section start */}
            <div>
                <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
                    <AboutMe/>

                    {/* what i do section start */}
                    <Service/>
                    {/* what i do section ends */}
                    
                    {/* clients section start */}
                    <Clients/>  
                    {/* clients section start */}
                    <Portfolio/>
                <Footer/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
