import './App.css';
import AboutMe from './components/AboutMe';
import Nav from './components/Nav';
import Photo from './about/Photo';

function App() {
  return (
    <div className="bg-homeBg">
      <Nav/>
      <div className='container'>
        <Photo/>
        <AboutMe/>
      </div>
      
    </div>
  );
}

export default App;
