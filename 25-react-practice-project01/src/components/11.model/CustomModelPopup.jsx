import React from 'react'

const CustomModelPopup = ({body,closeModel}) => {
  return (
    <div className='bg-amber-300 p-4'>
      <button className='border-2 bg-amber-950 text-white p-2' onClick={closeModel}>X</button>
      <header className='bg-red-500'>this is header</header>
      <section className='bg-green-300 min-h-25'>{body || 'this is section of body'}</section>
      <footer className='bg-orange-400'>this is footer</footer>
    </div>
  )
}

export default CustomModelPopup