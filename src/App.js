import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' />
          <Route component={Education} path='/education' />
          <Route component={Skills} path='/skills' />
          <Route component={Contact} path='/contact' />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
