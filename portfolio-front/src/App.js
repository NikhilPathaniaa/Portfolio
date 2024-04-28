import './App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <nav id="navbar" class="hidden lg:hidden">
            <ul>
                <li>
                    <a class="mobile-menu-items-active" href="aboutOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-user"></i>
                        </span>About </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="resumeOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-file-lines"></i>
                        </span>Resume </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="portfiloOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fas fa-briefcase"></i>
                        </span>Works </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="blogOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-brands fa-blogger"></i>
                        </span>Blogs </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="contactOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-solid fa-address-book"></i>
                        </span> Contact </a>
                </li>
            </ul>
        </nav>
      <AboutMe/>

    </div>
  );
}

export default App;
