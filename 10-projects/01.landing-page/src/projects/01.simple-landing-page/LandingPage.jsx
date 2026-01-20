import React from 'react'
import './landing.css'
const LandingPage = () => {
  return (
    <>
      <nav>
 <img src="brand_logo.png" className='logo' alt="logo" />
  <ul className='menus'>
    <li><a href="#">MENU</a></li>
    <li><a href="#">LOCATION</a></li>
    <li> <a href="#">ABOUT</a></li>
    <li><a href="#">CONTACT</a></li>
  
  </ul>
  <button className='login'>LogIn</button>
</nav>
<section>

<div className='info'>  
  <h1>Your Feet Deserve The Best</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit repudiandae neque architecto, enim odit perspiciatis ullam vitae labore sunt ab magni commodi! Dicta, magnam totam. Obcaecati, eius fugiat? Doloribus!
</p>
<div className='btn'>
  <button className='shop'>Ship Now</button >
  <button className='cat'>Category</button>
</div>
<p>Also available on</p>
<img src="amazon.png" alt="am" />
</div>

<div>
  <img className='img' src="shoe_image.png" alt="shoe" />

</div>
</section>
    </>
  )
}

export default LandingPage
