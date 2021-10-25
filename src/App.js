import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from "./components/Review/Review"
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Placeorder from './components/Placeorder/Placeorder';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div>
      <AuthProvider>
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
            <PrivateRoute path="/placeorder">
              <Placeorder />
            </PrivateRoute>
            <PrivateRoute path='/shipping'>
              <Shipping />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
