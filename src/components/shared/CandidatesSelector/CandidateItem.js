
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Socialset from '../../Socialset'



class CandidateItem extends Component {

  static propTypes = {
    key:PropTypes.number,
    id: PropTypes.string,
    photo: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    socialMedia: PropTypes.object
  }
  render() {

    const { key, firstname, lastname, photo, socialMedia } = this.props
    const { facebook, twitter, linkedin, instagram, github } = socialMedia

    return (
      <div className="candidate" key={key}>

        <img src={photo} alt="" />
        <div className="candidateMeta">
          <Typography variant="caption" gutterBottom>Offering: 0.234567 ETH</Typography>
          <Typography variant="h5" gutterBottom>{firstname + " " + lastname}</Typography>
          <Socialset linkedin={linkedin} facebook={facebook} twitter={twitter} instagram={instagram} github={github} />
        </div>

      </div>

    )
  }
}

export default CandidateItem
