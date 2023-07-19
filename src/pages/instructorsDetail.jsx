import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const InstructorsDetail = () => {

    let {id} = useParams()
    console.log(id)
  return (
    <div className='p-3'>

     <h1>Detailllll</h1>


    </div>
  )
}
