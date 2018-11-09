import React from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Mewe from './assets/mewe.png'
import CenterImage from './assets/1_Visual.png'
import Logo from './assets/GoodDollar_LOGO.png'


class OneOfUs extends React.Component {
    constructor(props) {
        super(props);
        this.goToVoucher = this.goToVoucher.bind(this);
    }

    goToVoucher() {
        this.props.history.push('voucher');
    }

    render() {
        const registered = this.props.registered

        return (
            <div>
                <Grid container style={{ height: '100vh' }}
                >
                    <Grid item xs={12}>
                        <img src={Mewe}
                            style={{
                                height: '15vh',
                                width: '15vh',
                                marginTop:'2vh',
                                border: '2px solid white',
                                borderRadius: '5px'
                            }}
                        />
                        <h3 style={{ color: 'white' }}>Identity made for you</h3>
                    </Grid>

                    <Grid xs={12}>
                        <img src={CenterImage}
                            style={{
                                height: 'auto',
                                maxWidth:'250px'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container
                            direction={'column'}
                            alignItems={'center'}
                            justify={'space-around'}
                            spacing={8}
                        >
                            <Grid item>
                                <Button style={{ width: '30vh' }}
                                    variant='contained'
                                    onClick={this.goToVoucher}
                                    color='primary'
                                >Vouch and earn
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button style={{ width: '30vh' }} variant='contained' color='secondary' disabled>Create id</Button>
                            </Grid>
                            <Grid>
                                <Grid container alignItems={'center'}>
                                    <h5 style={{ color: 'white' }}>powered by</h5>
                                    <img src={Logo}
                                        style={{ height: '5vh' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

OneOfUs.propTypes = {
    registered: PropTypes.string,
};

function mapStateToProps(state) {

    return {}
}

const connectedOneOfUs = connect(mapStateToProps)(withRouter(OneOfUs));
export { connectedOneOfUs as OneOfUs };