import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play_icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequcati, itaque enim, illo animi eius consectetur sapiente nulla id ipsam? Dolor impedit, quaerat atque rem minima officiis perferendis iure fuga illum dicta aperiam debitis laboriosam error! Commodi, voluptatibus tenetur. Debitis soluta quas fugiat quam doloremque molestias eveniet iste quod accusantium. Sequi mollitia tempora dolor officia eveniet labore esse quidem unde, et ea.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore sequi veniam dolorum, saepe rem odio similique odit, asperiores quaerat accusamus beatae! Eum animi veniam maiores consequatur aliquid! Maxime quae quod exercitationem aliquid suscipit, placeat voluptates? Quas delectus laborum molestiae.</p>
            <p>Lorem ipsum dolor chitecto beatae aspernatur provident, vitae cumque nam iure tempore voluptatem quae optio repudiandae harum perspiciatis enim doloremque hic ullam quos eum voluptatibus eius, animi quaerat iste. Et mollitia atque molestias quod cum, inventore sed repellendus minima natus assumenda! Deserunt, architecto!</p>
        </div>
    </div>
  )
}

export default About