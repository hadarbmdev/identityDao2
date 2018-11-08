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


class Register extends React.Component {
    constructor(props) {
        super(props);
        //this.handleMouseMove = this.handleMouseMove.bind(this); // later usage
        // this.state = { x: 0, y: 0 }; // later usage
    }


    render() {
        const registered = this.props.registered


        return (
            <div>

                <h1>Register</h1>


            </div>
        )
    }
}

Register.propTypes = {
    registered: PropTypes.string,
};

function mapStateToProps(state) {

    return {
        //coordinators:state.employees.coordinators,
        //fundraisers:state.employees.fundraisers,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const connectedRegister = connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
export { connectedRegister as Register};
