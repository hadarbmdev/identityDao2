import React from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';



class Welcome extends React.Component {
    constructor(props) {
        super(props);
        //this.handleMouseMove = this.handleMouseMove.bind(this); // later usage
        // this.state = { x: 0, y: 0 }; // later usage
    }


    render() {
        const registered = this.props.registered


        return (
            <div>

                <h1>Welcome</h1>
                <h3>What would you like to do today?</h3>
                <Grid container>
                    <Grid item md={4}>
                        <span />
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="contained" color="primary">Predict</Button>
                    </Grid>
                    <Grid item md={2}>
                        {(registered == "true") &&
                            <Button variant="contained" color="primary">Vote</Button>
                        }

                         {(registered == "false") &&
                            <Button variant="contained" color="primary">Register</Button>
                        }

                        
                    </Grid>
                    <Grid item md={4}>
                        <span />
                    </Grid>
                </Grid>


            </div>
        )
    }
}

Welcome.propTypes = {
    registered: PropTypes.string,
};

export default withRouter(Welcome);
