import './App.css';
import Aboutus from './components/aboutus';
import Events from './components/events';
import Landing_page from './components/landing-page';
function App() {
  return (
    <div className="App">
         <Landing_page/>
         <Aboutus/>
         <Events/>
    </div>
  );
}

export default App;
