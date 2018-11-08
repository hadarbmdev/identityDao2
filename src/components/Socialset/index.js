import React from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
//import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'


import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
//import LockIcon from '@material-ui/icons/LockOutlined';

import withStyles from '@material-ui/core/styles/withStyles';

import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
});


class Socialset extends React.Component {
    constructor(props) {
        super(props);

    }
    

    render() {
        const registered = this.props.registered
        const { classes } = this.props;


        return (

            <main >

<Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>

            <CssBaseline />
            <Paper >
              
              <Typography component="h1" variant="h5">
                Socialset
              </Typography>
              <form >
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input name="password" type="password" id="password" autoComplete="current-password" />
                </FormControl>
                
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="facebook">Your Facebook username</InputLabel>
                  <Input name="facebook" type="text" id="facebook" autoComplete="facebook" />
                </FormControl>
                
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="linkedin">Your Linkedin username</InputLabel>
                  <Input name="linkedin" type="text" id="linkedin" autoComplete="linkedin" />
                </FormControl>
                
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="github">Your Github username</InputLabel>
                  <Input name="github" type="text" id="github" autoComplete="github" />
                </FormControl>
                
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"

                  >
                  Sign in
                </Button>
              </form>
            </Paper>
          </main>

        )
    }
}

Socialset.propTypes = {
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

const connectedRegister = connect(mapStateToProps, mapDispatchToProps)(withRouter(Socialset));
export { connectedRegister as Socialset};
