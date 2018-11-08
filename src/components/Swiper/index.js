import React from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'

const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
  };




class Swiper extends React.Component {
    constructor(props) {
        super(props);
       
    }


    render() {
        const registered = this.props.registered


        return (
            <SwipeableViews>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
                slide n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
                slide n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
                slide n°3
            </div>
            </SwipeableViews>
        )
    }
}

Swiper.propTypes = {
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

const connectedWelcome = connect(mapStateToProps, mapDispatchToProps)(withRouter(Swiper));
export { connectedWelcome as Swiper};
