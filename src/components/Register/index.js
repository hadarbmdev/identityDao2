import React from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
//import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'


/*
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
*/


class Register extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const registered = this.props.registered


        return (
            <div>

                


            </div>
        )
    }
}

Register.propTypes = {
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

const connectedRegister = connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
export { connectedRegister as Register};
