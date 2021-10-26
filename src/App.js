import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Header } from './components/header/header';
import ByPopularity from './components/byPopularity/byPopularity';
import ByRating  from './components/byRating/byRating.jsx';
import { Footer } from './components/footer/footer';
import Register from './components/auth/register/register.jsx';
import Login from './components/auth/login/login.jsx';
import ByYear from './components/byYear/byYear.jsx';
import { LoaderContext } from './contexts/loaderContext';
import ViewLater from './components/viewLater/viewLater';



function App() {

  const {loader, isShowLoader} = useContext(LoaderContext)

  return (
    <div className="App">
        {
          isShowLoader ? loader : ''
        }
        <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={ByPopularity} />
          <Route path="/byRating" component={ByRating} />
          <Route path="/byYear/:yyyy" component={ByYear} />
          <Route path="/viewLater" component={ViewLater} />

          <Route path="/login" component={Login} />
          <Route path="/registration" component={Register} />
        </Switch>
        </Router>
        <Footer/>

    </div>
  );
}

export default App;
