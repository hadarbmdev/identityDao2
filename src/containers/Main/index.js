import React from 'react';
<<<<<<< HEAD
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { Welcome } from '../../components/Welcome';
import { Register } from '../../components/Register';
=======
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Welcome } from '../../components/Welcome'
>>>>>>> 7615246b906c00b4f254627db90b9d8418089d59

export default function Main() {
  return (
    <div>

        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
    </div>
  );
}
