import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { Welcome } from '../../components/Welcome';
import { Register } from '../../components/Register';
import { Socialset } from '../../components/Socialset';

export default function Main() {
  return (
    <div>

        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/socialset" component={Socialset} />

    </div>
  );
}

