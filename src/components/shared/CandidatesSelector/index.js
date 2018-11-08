import React from 'react'
import CandidateItem from './CandidateItem'
import './CandidatesSelector.css';
import SwipeableViews from 'react-swipeable-views';

const CandidatesSelector = (props) => {

 const candidatesList =  [{
    id:1,
    photo:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
    firstname:"Suzie",
    lastname:"Bar"


  },
  {
    id:2,
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0ODGnaKeoz3ffQi0jID50h294U7bAg_sbj8fIiGmqTOsyq0LHw",
    firstname:"Mark",
    lastname:"Boskowitz"


  },
  {
    id:3,
    photo:"https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-background-constrast-solid.jpg",
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
    <SwipeableViews>
        {candidates}
    </SwipeableViews>
    
    
  )
}

export default CandidatesSelector