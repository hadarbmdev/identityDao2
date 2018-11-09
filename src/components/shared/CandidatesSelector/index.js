import React from 'react'
import CandidateItem from './CandidateItem'
import './CandidatesSelector.css';
import SwipeableViews from 'react-swipeable-views';




const CandidatesSelector = (props) => {

  
  const candidatesList = props.candidates

  const candidates = candidatesList.map((c, index) => {

    return <CandidateItem
      isOpen={props.isOpen}
      key={index}
      photo={c.photo}
      firstname={c.firstname}
      lastname={c.lastname}
      ethOffering={c.ethOffering}
      socialMedia={c.socialMedia}
      proposalId={c.proposalId}
    />
  })
  /*if (props!=undefined)
    props.slideHandler(props[0]);*/
  return (
  
    <div>
<<<<<<< HEAD
      <SwipeableViews>
=======
      <SwipeableViews onChangeIndex={((index, indexLatest, meta)=>props.slideHandler(candidates[index].props))}>
>>>>>>> 096ebcbc46c37e4421d07a2244564a29e6601608
        {candidates}
      </SwipeableViews>

      

    </div>

  )
}

export default CandidatesSelector