
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




class CandidateItem extends Component {

  static propTypes = {
    id: PropTypes.string,
    photo: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }
  render() {

    const { key, firstname, lastname, photo } = this.props
    return (
      <div className="candidate">
      
          <img src={photo} alt="" />
          <div className="candidateMeta">
            {firstname + " " + lastname}
          </div>
       
      </div>
    )
  }
}

export default CandidateItem
