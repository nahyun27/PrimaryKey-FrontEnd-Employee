import './App.css';
import Home from './pages/Home.jsx';
import Request from './pages/Request.jsx';
import Vacation from './pages/Vacation.jsx';
import Schedule from './pages/Schedule.jsx';
import Notice from './pages/Notice.jsx';
import Meal from './pages/Meal.jsx';
import Compliment from './pages/Compliment.jsx';

import Login from './pages/Login.jsx'
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Request' exact component={Request} />
            <Route path='/Vacation' exact component={Vacation} />
            <Route path='/Schedule' exact component={Schedule} />
            <Route path='/Compliment' exact component={Compliment} />
            <Route path='/Meal' exact component={Meal} />
            <Route path='/Notice' exact component={Notice} />

            <Route path='/Login' exact component={Login} />
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
