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
      <SwipeableViews onChangeIndex={((index, indexLatest, meta)=>props.slideHandler(candidates[index].props))}>
        {candidates}
      </SwipeableViews>

      

    </div>

  )
}

export default CandidatesSelector