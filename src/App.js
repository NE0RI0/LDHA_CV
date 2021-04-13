import './App.css';
import Rout from './components/Rout/rout';
import ContactMe from './components/footer/footer';
import NaviBar from './components/navibar/navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global/styles/bootstrap_modif.css'

function App() {
  return (
    <div className='app-body'>
      <NaviBar/>
      <Rout/>      
      <ContactMe/>
    </div>
  );
}

export default App;
