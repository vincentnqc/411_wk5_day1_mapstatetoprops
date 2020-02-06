import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './Containers/Home'
import About from './components/About'
import Car from './Containers/Car'
import Dashboard from './Containers/Dashboard'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;