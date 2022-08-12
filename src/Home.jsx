import React from 'react';
import image from './assets/profilecircle.png'

const Home = () => {
  return (
    <>
        <div className="home-component" id='/'>

        <div className="heading">
            <h1>Hi, I'am Roman </h1>
            <p>A Front End Developer</p>
            <p> I make e-commerce websites for businesses</p>
        </div>

        <div className="profile-img">
            <img src={image} alt="Profile picture" />
        </div>

        </div>
    </>
  )
}

export default Home