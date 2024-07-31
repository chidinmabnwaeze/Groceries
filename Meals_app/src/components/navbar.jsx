import React from 'react'

const navbar = () => {
  return (
    <div>

    <div style={{backgroundColor:'brown'}}>
        <h1>React Meals</h1>
        <a style={{textDecoration: 'none', color: 'white'}} href="#">Home</a>
        <a style={{textDecoration: 'none', color: 'white'}} href="#">Order</a>
        <a style={{textDecoration: 'none', color: 'white'}} href="#">Contact Us</a>

    </div>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  )
}

export default navbar