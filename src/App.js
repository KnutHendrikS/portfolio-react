import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Projects from './contents/Projects';
import Contact from './contents/Contact';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' />
          <Route component={Education} path='/education' />
          <Route component={Projects} path='/projects' />
          <Route component={Contact} path='/contact' />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
