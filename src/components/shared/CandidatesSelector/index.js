import React from 'react'
import CandidateItem from './CandidateItem'
import './CandidatesSelector.css';
import SwipeableViews from 'react-swipeable-views';

const CandidatesSelector = (props) => {

 const candidatesList = props.candidates

 const candidates = candidatesList.map((c) => {
    return <CandidateItem 
                    photo={c.photo}
                    firstname={c.firstname}
                    lastname={c.lastname}
                     />
  })

  return (
    <SwipeableViews>
        {candidates}
  </SwipeableViews>
    
    
  )
}

export default CandidatesSelector