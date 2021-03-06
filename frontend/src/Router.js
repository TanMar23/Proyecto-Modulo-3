import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/Login/Login'
import NotFound from './components/404/NotFound.js';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile'
import Centers from './components/Centers/Centers'
import Center from './components/Centers/Center'
import CentersCategory from './components/Centers/CentersCategory';
import Landing from './components/Landing/Landing';
import CreateNew from './components/Centers/CreateNew';
import Test from './components/Profile/Test';
import Contribution from './components/Profile/Contribution';
import ContributionList from './components/Profile/ContributionList';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/create-new" component={CreateNew}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/test" component={Test}/>
      <Route exact path="/contribution" component={Contribution}/>
      <Route exact path="/contribution-list" component={ContributionList}/>
      <Route exact path="/centers" component={Centers}/>
      <Route exact path="/center/:id" component={Center}/>
      <Route exact path="/centers/:categoryCenter" component={CentersCategory}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
