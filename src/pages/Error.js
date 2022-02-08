import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! It is a dead end</h1>
        <Link className='btn-primary' to='/'>Go back</Link>
      </div>
    </section>
  )
}

export default Error
