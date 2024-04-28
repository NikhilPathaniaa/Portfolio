import './App.css';
import 'tailwindcss/base.css';

import Nav from './components/Nav';
import Photo from './about/Photo';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {

  return (

      <div className="bg-homeBg  dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full" >
        
        <div className='container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]'>
        
          <Photo/>
          <div className="col-span-12 lg:col-span-8">
            <Nav/>
            <Hero/>
            <Footer/>
          </div>    
        </div>
        
      </div>
  );
}

export default App;
