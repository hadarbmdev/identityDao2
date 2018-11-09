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
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class Voter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.requestCandidatesData();
    }

    render() {
        const candidatesList = this.props.candidates
        return (
            <div>
                <div>Vote</div>
                <CandidatesSelector isOpen={false} candidates={candidatesList} />
                <Grid container spacing={24}>

                    <Grid item xs={6} sm={3}>

                        <Button variant="extendedFab" aria-label="Delete" >
                            <Icon />
                            Real
                        </Button>

                    </Grid>
                    <Grid item xs={6} sm={3}>

                        <Button variant="extendedFab" aria-label="Delete" >
                            <Icon />
                            Fake
                          </Button>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

Voter.propTypes = {
    registered: PropTypes.string,
};

function mapStateToProps(state) {
    return {
        candidates: state.voucher.candidates,
        user:state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const connectedVoter = connect(mapStateToProps, mapDispatchToProps)(withRouter(Voter));
export { connectedVoter as Voter };
