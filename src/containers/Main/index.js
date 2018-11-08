import React from 'react';

import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Welcome } from '../../components/Welcome'
import { OneOfUs } from '../../components/OneOfUs'
import { Voucher } from '../../components/Voucher'
import { Register } from '../../components/Register';
import { Socialset } from '../../components/Socialset';
<<<<<<< HEAD
import { Swiper } from '../../components/Swiper';
=======
import { Payment } from '../../components/Payment';
>>>>>>> 420a5a48f45436e7d16305f09870634c5c369f89

export default function Main() {
  return (
    <div>

        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/oneOfUs" component={OneOfUs} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/socialset" component={Socialset} />
        <Route exact path="/voucher" component={Voucher} />
<<<<<<< HEAD
        <Route exact path="/swiper" component={Swiper} />
=======
        <Route exact path="/payment" component={Payment} />
>>>>>>> 420a5a48f45436e7d16305f09870634c5c369f89

    </div>
  );
}

