import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
<<<<<<< HEAD
import Welcome from '../../components/Welcome'
import Register from '../../components/Register/'
=======
import { Welcome } from '../../components/Welcome'
import Register from '../../components/Register'
>>>>>>> 49aa5e477a8ee8be7ca87261f8b9182822726bf3

export default function Main() {
  return (
    <div>

        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/register" component={Register} />
    </div>
  );
}
