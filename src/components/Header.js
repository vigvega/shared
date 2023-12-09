import React from 'react'
import github_logo from './imgs/githublogo.png'

const Header = () => {

  return (
    <header className="font-mono p-3 flex justify-between">

      <blockquote className="text-2xl font-semibold">
        <span className="text-white">shar</span>
        <span className="text-red-500 italic">ED</span>
      </blockquote>

      <div className="mr-4">
        <button className="flex items-center bg-transparent">
          <img src={github_logo} className="w-10 h-10"/>
        </button>
      </div>
      
    </header>
  )
};

export default Header;
