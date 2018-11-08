import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Welcome } from '../../components/Welcome'
import { Voucher } from '../../components/Voucher'

export default function Main() {
  return (
    <div>

        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />

        <Route exact path="/voucher" component={Voucher} />


    </div>
  );
}

