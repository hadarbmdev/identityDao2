import React from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class OneOfUs extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const registered = this.props.registered

        return (
            <div>
                <Grid container
                >
                    <Grid item xs={12}>
                        <h1>One of us</h1>
                        <h3>Identity made for you</h3>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container
                            direction={'column'}
                            alignItems={'center'}
                            spacing={8}
                        >
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary">vouch and earn</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary">create id</Button>
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