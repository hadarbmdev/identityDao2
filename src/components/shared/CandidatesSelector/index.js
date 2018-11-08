import React from 'react'
import CandidateItem from './CandidateItem'
import './CandidatesSelector.css';
import SwipeableViews from 'react-swipeable-views';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';


const CandidatesSelector = (props) => {

 const candidatesList =  [{
    id:1,
    photo:"https://loremflickr.com/360/360",
    firstname:"Suzie",
    lastname:"Bar"


  },
  {
    id:2,
    photo:"https://www.fillmurray.com/360/360",
    firstname:"Mark",
    lastname:"Boskowitz"


  },
  {
    id:3,
    photo:"https://placekitten.com/360/360",
    firstname:"Sibua",
    lastname:"Papao"


  }];  // props.candidates



  const candidates = candidatesList.map((c) => {
    return <CandidateItem 
                    photo={c.photo}
                    firstname={c.firstname}
                    lastname={c.lastname}
                     />
  })

  return (

  <div>
  <p className="topHeader">Vouch if profile is real and earn ETH</p>
  <SwipeableViews>
        {candidates}
  </SwipeableViews>
  
  <Grid container spacing={24}>

  <Grid item xs={6} sm={3}>
    <Paper>xs=6 sm=3</Paper>
  </Grid>
  <Grid item xs={6} sm={3}>
    <Paper>xs=6 sm=3</Paper>
  </Grid>
  </Grid>

  </div>
    
  )
}

export default CandidatesSelector