import React from 'react'
import CandidateItem from './CandidateItem'
import './CandidatesSelector.css';
import SwipeableViews from 'react-swipeable-views';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';


const CandidatesSelector = (props) => {


  const candidatesList = props.candidates

  const candidates = candidatesList.map((c,index) => {

    return <CandidateItem
      key={index}
      photo={c.photo}
      firstname={c.firstname}
      lastname={c.lastname}
      ethOffering={c.ethOffering}
      socialMedia={c.socialMedia}
    />
  })

  return (

    <div>
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