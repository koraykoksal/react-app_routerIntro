import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export const InstructorsDetail = () => {

    let {id} = useParams()
    console.log(id)

    let {state,location} = useLocation()
    console.log(location)

  return (
    <div className='p-3'>

     <h1>Detailllll</h1>

        <p>from useParam : I'm instrauctor {" "}<span className='text-danger'>{id}</span></p>

        <p>from location : I'm instrauctor {" "}<span className='text-danger'>{state.name}</span></p>


    </div>
  )
}
