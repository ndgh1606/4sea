import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/companies/companies';
import Residentcies from './components/Residentcies/Residentcies';
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
    </div>
  );
}

export default App;
