import React from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Typography } from '@material-ui/core';


class Payment extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const registered = this.props.registered

        return (
            <Paper>
<Typography>hi</Typography>
            </Paper>
        )
    }
}

Payment.propTypes = {
    registered: PropTypes.string,
};

function mapStateToProps(state) {

    return {}
}

const connectedPayment = connect(mapStateToProps)(withRouter(Payment));
export { connectedPayment as Payment };