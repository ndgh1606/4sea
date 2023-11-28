import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/companies/companies';
import Residentcies from './components/Residentcies/Residentcies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient">

      </div>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residentcies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
