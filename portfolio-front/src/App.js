import DayNight from "./components/DayNight";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProfileSideBar from "./components/ProfileSideBar";
import AboutMe from "./content/AboutMe";
import Nav1 from "./mobileResponsive/Nav1";


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
                    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                        <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                            <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src="images/icons/icon.svg"
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> Ui/Ux Design </h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                </div>
                            </div>

                            <div className="about-box bg-[#fefaf0] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src="images/icons/icon1.svg"
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> App Development </h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                </div>
                            </div>

                            <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src="images/icons/icon2.svg"
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> Photography </h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                </div>
                            </div>

                            <div className="about-box bg-[#fff4f4] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src="images/icons/icon3.svg"
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> Photography </h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                </div>
                            </div>

                            <div className="about-box bg-[#fff0f8] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src="images/icons/icon4.svg"
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> Managment </h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                </div>
                            </div>

                            <div className="about-box bg-[#f3faff] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src="images/icons/icon5.svg"
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> Web Development </h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* what i do section start */}
                    <div className="px-2 sm:px-5 md:px-10 lg:px-14">
                        <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
                            <h3 className="text-center dark:text-white text-6xl mb-3 font-semibold"> Clients </h3>
                            {/* slider and slider items */}
                            <div className="slickOne text-center px-2 pt-8">
                                <div>
                                    <img className="overflow-hidden brand-img" src="images/slider/brand.png"
                                        alt="brand icon" />
                                </div>
                                <div>
                                    <img className="overflow-hidden brand-img" src="images/slider/brand1.png"
                                        alt="brand icon" />
                                </div>
                                <div>
                                    <img className="overflow-hidden brand-img" src="images/slider/brand2.png"
                                        alt="brand icon" />
                                </div>
                                <div>
                                    <img className="overflow-hidden brand-img" src="images/slider/brand3.png"
                                        alt="brand icon" />
                                </div>
                                <div>
                                    <img className="overflow-hidden brand-img" src="images/slider/brand4.png"
                                        alt="brand icon" />
                                </div>
                                <div>
                                    <img className="overflow-hidden brand-img" src="images/slider/brand1.png"
                                        alt="brand icon" />
                                </div>
                                <div>
                                    <img className="overflow-hidden brand-img" src="images/slider/brand1.png"
                                        alt="brand icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                <Footer/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
