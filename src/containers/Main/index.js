import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Welcome } from '../../components/Welcome'

export default function Main() {
  return (
    <div>

        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
    </div>
  );
}
