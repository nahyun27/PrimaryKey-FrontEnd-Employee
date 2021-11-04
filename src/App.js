import './App.css';
import Home from './pages/Home.jsx';
import Request from './pages/Request.jsx';
import Vacation from './pages/Vacation.jsx';
import Schedule from './pages/Schedule.jsx';
import Notice from './pages/Notice.jsx';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route path="/Request"><Request></Request></Route>
            <Route path="/Vacation"><Vacation></Vacation></Route>
            <Route path="/Schedule"><Schedule></Schedule></Route>
            <Route path="/Notice"><Notice></Notice></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
