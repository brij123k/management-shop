import React from 'react'
import Logo from '../../Logo/indexLogo'
// import './Banner1.css'
// import bannerimg from './banner.png'

const Banner1 = () => {
  return (
    <header>
     
      {/* <div className="header-content"> */}
        <Logo/>
        {/* <div className="content-main">
          <h1>Delicious food for your cravings</h1>
          <p>We made fresh and healthy meals different recipes</p>
          <button>
            View Menu <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
      </div>
      <img src={bannerimg} alt="error" className="header-img"/> */}
      <hr className='hr'></hr>
    </header>
    
  )
}

export default Banner1