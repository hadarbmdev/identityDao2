import React from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'
import CandidatesSelector from '../shared/CandidatesSelector'

class Voucher extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <CandidatesSelector />
            </div>
        )
    }
}

Voucher.propTypes = {
    registered: PropTypes.string,
};

function mapStateToProps(state) {

    return {
     
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const connectedVoucher = connect(mapStateToProps, mapDispatchToProps)(withRouter(Voucher));
export { connectedVoucher as Voucher};
