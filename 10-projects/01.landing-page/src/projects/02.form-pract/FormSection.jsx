import React from 'react'

const FormSection = () => {
  return (
    <div className='container'>
   <div className="form-area">
     <h1>Contact us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi omnis laboriosam dicta ea alias, voluptates consectetur quaerat voluptas adipisci placeat illo totam eum, in dolorum harum, est tempore ab.</p>
    <div className='btns'>
      <button>Visit shopping Card</button>
      <button>Via call</button>
    </div>
    <button className='emailBtn'>Via Email Form</button>
    <form action="">
      <input type="text" />
    <input type="email" />
    <textarea name="" id=""></textarea>
    <button className='submitBtn'>Submit</button>
    </form>
   </div>
   <div className="img">
    <img src="brand_logo.png" alt="" />
   </div>
    
    </div>
  )
}

export default FormSection