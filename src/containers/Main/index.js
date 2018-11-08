import React from 'react';

import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Welcome } from '../../components/Welcome'
import { OneOfUs } from '../../components/OneOfUs'
import { Voucher } from '../../components/Voucher'
import  Socialset  from '../../components/Socialset';
import { Swiper } from '../../components/Swiper';
import { Payment } from '../../components/Payment';

export default function Main() {
  return (
    <div>

        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/oneOfUs" component={OneOfUs} />
        <Route exact path="/register" component={Welcome} />
        <Route exact path="/socialset" component={Socialset} />
        <Route exact path="/voucher" component={Voucher} />
        <Route exact path="/swiper" component={Swiper} />
        <Route exact path="/payment" component={Payment} />

    </div>
  );
}

