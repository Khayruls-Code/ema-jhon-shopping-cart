import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from "./components/Review/Review"
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Placeorder from './components/Placeorder/Placeorder';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/home">
            <Shop />
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/placeorder">
            <Placeorder />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
