
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
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
    firstname:PropTypes.string,
    lastname:PropTypes.string,
  }
  render() {

    const {id, firstname,lastname, photo} = this.props
    return (

      <Card>
      <CardActionArea>
        <CardMedia
          className = "cardPhoto"
           image={photo}
          title={firstname + " " + lastname}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {firstname + " " + lastname}
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    )
  }
}

export default CandidateItem
