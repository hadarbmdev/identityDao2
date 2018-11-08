import React from 'react'
import CandidateItem from './CandidateItem'
//import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import './CandidatesSelector.css';

const CandidatesSelector = (props) => {

 const candidatesList =  [{
    id:1,
    photo:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
    firstname:"Suzie",
    lastname:"Bar"


  }]  // props.candidates
  const candidates = candidatesList.map((c) => {
    return <CandidateItem key={c.id}
                    photo={c.photo}
                    firstname={c.firstname}
                    lastname={c.lastname} />
  })

  return (
    <div>{candidates}</div>
  )
}

export default CandidatesSelector