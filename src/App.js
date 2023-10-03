import './App.css';
import Aboutus from './components/aboutus';
import Events from './components/events';
import Landing_page from './components/landing-page';
import Index from './components/testimonials';
import logo from './assets/logo.svg';
function App() {
  return (
    <div className="App">
         <Landing_page/>
         <Aboutus/>
         <Events/>
         <Index/>
    </div>
  );
}

export default App;
