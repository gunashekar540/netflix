import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_video from '../../assets/le casa de papel.mp4'
import hero_title from '../../assets/money.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <div className='hero'>
      <video src={hero_video}
            autoPlay
            // muted
            loop
           className='banner-img'></video>
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img'/>
        <p>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
        <div className="title-cards">
        <TitleCards/>
        </div>
      </div>
    </div>
    <div className="more-cards">
    <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
    <TitleCards title={"Only on Netflix"} category={"popular"}/>
    <TitleCards title={"Upcoming"} category={"upcoming"}/>
    <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home