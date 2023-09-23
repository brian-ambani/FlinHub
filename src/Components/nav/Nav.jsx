import React from 'react'

const Nav = () => {
  return (
    <div className='container w-3/4 mx-auto text-bold flex items-center justify-between py-10 text-xl font-bold font-mono'>
        <ul className='flex space-x-8'>
            <a className="hover:text-slate-400" href=""><li>FHub</li></a>
            <a className="hover:text-slate-400" href=""><li>Watch</li></a>
            <a className="hover:text-slate-400" href=""><li>Explore</li></a>
            <a className="hover:text-slate-400" href=""><li>Get</li></a>
            <a className="hover:text-slate-400" href=""><li>Pay</li></a>
            <a className="hover:text-slate-400" href=""><li>MyFHub</li></a>
            <a className="hover:text-slate-400" href=""><li>About</li></a>
        </ul >
        <ul className='space-x-12 flex'>
          <a className="hover:text-slate-400" href=""><li>Search</li></a>
          <a className="hover:text-slate-400" href=""><li>Sign in</li></a>
        </ul>
    </div>
  )
}

export default Nav