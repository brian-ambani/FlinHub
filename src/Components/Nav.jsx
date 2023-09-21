import React from 'react'

const Nav = () => {
  return (
    <div className='container w-3/4 mx-auto text-bold flex items-center justify-between py-10 text-xl font-bold'>
        <ul className='flex space-x-8'>
            <a href=""><li>FHub</li></a>
            <a href=""><li>Watch</li></a>
            <a href=""><li>Explore</li></a>
            <a href=""><li>Get</li></a>
            <a href=""><li>Pay</li></a>
            <a href=""><li>MyFHub</li></a>
            <a href=""><li>About</li></a>
        </ul >
        <ul className='space-x-12 flex'>
          <a href=""><li>Search</li></a>
          <a href=""><li>Sign in</li></a>
        </ul>
    </div>
  )
}

export default Nav